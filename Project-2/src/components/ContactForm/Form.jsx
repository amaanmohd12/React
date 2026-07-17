import React from "react";
import { MdOutlineInsertComment } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
function Form() {
  return (
    <div className=" flex flex-col w-full h-full pl-50">
      <div className=" flex flex-row gap-4 mt-20">
        <button className="w-50 h-auto flex items-center justify-center bg-black text-white p-2 gap-2 rounded-md">
          <MdOutlineInsertComment />
          <span>VIA SUPPORT CHAT</span>
        </button>
        <button className="w-50 h-auto flex items-center justify-center bg-black text-white p-2 gap-2 rounded-md">
          <IoCallOutline />
          <span>VIA CALL</span>
        </button>
      </div>
      <button className="w-104 h-10 flex items-center justify-center text-black bg-white p-2 gap-2 rounded-md border-2 mt-5">
        <MdOutlineInsertComment />
        <span>VIA EMAIL FORM </span>
      </button>
    </div>
  );
}

export default Form;
