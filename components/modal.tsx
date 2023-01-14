import React, { useState } from "react";

const Modal = ({ setShowmodal, body, handleClose , handleOpen}: any) => {

  return (
    <div
      className="fixed inset-0  m-0 bg-black bg-opacity-25  flex justify-center items-center "
      id="wrapper"
    >
      <div className="w-[600px]">
        <div className="bg-white p-2 rounded-xl flex flex-col ">
          <button
            className="text-black text-xl place-self-end"
            onClick={handleClose}
          >
            x
          </button>
          <h1>
            {body}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Modal;
