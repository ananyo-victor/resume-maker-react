import React, { useState } from 'react'
import Temp1 from '../templates/Temp1.jsx'

function Preview(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="my-5 lg:mt-8 flex items-center justify-between container">
        <div className="ml-5 w-2/3">
          <p className="text-2xl font-bold lg:text-4xl">{props.Name}</p>
          <p className="lg:mt-4 text-base font-semibold lg:text-xl">{props.Desc}</p>
        </div>
        <div className='flex items-center justify-center w-1/3'>
          <button
            className="lg:hidden mr-4 h-fit w-fit p-3 rounded-xl border-2 border-white font-bold hover:drop-shadow-xl shadow-xl transform active:scale-75 transition-transform" onClick={openModal}
          >Pre</button>

          <button
            className="hidden lg:block mr-4 h-fit px-3 py-2 rounded-xl border-2 border-white text-xl font-bold hover:scale-110 drop-shadow-xl shadow-xl transform active:scale-75 transition-transform" onClick={openModal}
          >Preview</button>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed max-h-screen w-screen inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/80" onClick={closeModal}></div>
          <div className="relative z-10 w-full h-full flex justify-center items-center">
            <Temp1 />
          </div>
        </div>
      )}
    </>
  )
}

export default Preview
