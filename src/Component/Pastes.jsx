import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPaste } from "../redux/pasteSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { MdPreview } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { FaCopy } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

const Pastes = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  

  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPaste(pasteId));
  }

  function handleCopy(content) {
    navigator.clipboard.writeText(content);
    toast.success("copy to clipboard. . . ");
  }

  function handleShare(paste){
    const pasteContent = {
      title : paste?.title || "",
      text : paste?.title+paste?.content || "",
      
    }
    console.log(pasteContent);
    
    if(navigator.share){
      navigator.share({...pasteContent});
      toast.success("shared successfully")
    }else{
      alert("cant't be shared ")
    }
  }
  function handleDownload(paste){
    const content = paste?.content
    const blob = new Blob([content],{type : "text/plain"});
    const url = URL.createObjectURL(blob)

    const link  = document.createElement("a")
    link.href = url;
    link.download = "sample.txt";
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link)
  }

  return (
    <div>
      <input
        className="border-red-400 border-2 bg-gray-100 rounded-lg w-[85vw] mt-4 p-3"
        type="search"
        placeholder="Search Here . . ."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="">
        {filterData.length > 0 &&
          filterData.map((paste) => {
            // const date= paste.ceatedAt;
            // const day = String(date.getDate()).padStart(2,'0')
            // const month = String(date.getMonth()+1).padStart(2,'0')
            // const year = date.getFullYear()
            // const formatedDate = `${day}/${month}/${year}`
            return (
              <div
                className="border-red-400 border-2 bg-gray-100 rounded-lg w-[85vw] mt-4"
                key={paste._id}
              >
                <div className="md:flex justify-around">
                  <div className="md:w-[65vw] flex flex-wrap justify-center">
                    <div className="font-extrabold font-sans text-xl m-4 ">
                      {paste.title}
                    </div>
                    <div className="">{paste.content}</div>
                  </div>
                  <div className="grid md:grid-cols-1 grid-cols-3 justify-items-center gap-3 mt-4">
                    <button className="button">
                      <Link to={`/pastes/${paste._id}`} className="text-black ">
                        <MdPreview className=""/>
                      </Link>
                    </button>
                    <button 
                    className="button">
                      <Link
                        to={`/?pasteId=${paste?._id}`}
                        className="text-black font-extrabold  hover:text-blue-700"
                      >
                        <FaEdit />
                      </Link>
                    </button>
                    <button
                      onClick={() => handleCopy(paste?.content)}
                      className="button"
                    >
                      <FaCopy />
                    </button>
                    <button
                      onClick={() => handleDelete(paste?._id)}
                      className=" button"
                    >
                      <MdDelete />
                    </button>
                    <button 
                      onClick={() => handleShare(paste)}
                      className="button">
                      <FaShareAlt />
                    </button>
                    <button className=" button" 
                      onClick={() => handleDownload(paste)}
                      >
                      <FaDownload />
                    </button>
                  </div>
                </div>
                <div className="flex justify-end m-4 mx-6 ">
                  
                  <div className="">{paste.createdAt}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Pastes;
