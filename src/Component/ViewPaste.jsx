import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const ViewPaste = () => {
  
  const allPastes = useSelector((state) => state.paste.pastes)

  const {id} = useParams()
  const paste = allPastes.filter((p) => p._id === id)[0]

  console.log(paste);
  
  return (
    <div className="flex flex-wrap ">
      <div className="flex gap-7 justify-around">
        <input
          className="border-red-400 border-2 bg-gray-100 rounded-lg w-[85vw] mt-4 p-3 "
          type="text"
          placeholder="enter title..."
          value={paste.title}
          disabled
          onChange={(e) => setTitle(e.target.value)}
        />
        
      </div>
      <div className="">
       <textarea 
              className="border-red-400 border-2 bg-gray-100 rounded-lg w-[85vw] mt-4 p-6 overflow-scroll"
              name="" 
              id=""
              value={paste.content}
              placeholder="Write content. . . " 
              onChange={(e) => setValue(e.target.value)}
              rows={17}   
              disabled   
       >

       </textarea>
      </div>
    </div>
  )
}

export default ViewPaste
