import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";
import { IoIosCreate } from "react-icons/io";
import { GrUpdate } from "react-icons/gr";
const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch()
  const allPastes = useSelector((state) => state.paste.pastes)

  
       useEffect(() => {
       if(pasteId) {
              const paste = allPastes.find((p) => p._id === pasteId)
              setTitle(paste.title)
              setValue(paste.content)
       }
       
       },[pasteId])
       
  const createPaste = () => {
       const paste = {
              title : title,
              content : value,
              _id : pasteId || Date.now().toString(36),
              createdAt : new Date().toISOString()
       }


       if(pasteId){
              //update
              dispatch(updateToPastes(paste))
       }
       else{
              //create
              dispatch(addToPastes(paste))
       }
       setTitle("")
       setValue("")
       setSearchParams({})
  }


  return (
    <div className="flex flex-wrap  border-2 rounded-lg bg-gray-300 border-red-400 mt-4 w-[85vw]">
      <div className="flex mt-4 ml-5 gap-10 ">
        <input
          className="pl-2 border-red-400 border-2 bg-gray-100 rounded-lg"
          type="text"
          placeholder="enter title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button 
              className="border-red-400 bg-gray-200 border-2 rounded-lg"
              onClick={createPaste}
       >
          <p className="bg-red-300 p-2 rounded-xl font-bold text-black shadow-slate-500 shadow-lg">{pasteId ? <GrUpdate /> : <IoIosCreate />}</p>
        </button>
      </div>
      <div className="">
       <textarea 
              className="p-3  rounded-lg m-4 min-w-[75vw] border-red-400 border-2 bg-gray-100"
              name="" 
              id=""
              value={value}
              placeholder="Write content. . . " 
              onChange={(e) => setValue(e.target.value)}
              rows={17}      
       >

       </textarea>
      </div>
    </div>
  );
};

export default Home;
