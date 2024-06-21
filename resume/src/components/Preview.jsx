import React from 'react'

function Preview(props) {
  return (
    <>
      <div className="my-8 lg:mt-8 flex items-center justify-between container">
        <div className="ml-5 w-2/3">
          <p className="text-2xl font-bold lg:text-4xl">{props.Name}</p>
          <p className="mt-2 lg:mt-4 text-base font-semibold lg:text-xl">{props.Desc}</p>
        </div>
        <div className='flex items-center justify-center w-1/3'>
          <button
            className="lg:hidden mr-4 h-fit w-fit p-3 rounded-xl border-2 border-white font-bold hover:drop-shadow-xl shadow-xl"
            >Pre</button>

          <button
            className="hidden lg:block mr-4 h-fit px-3 py-2 rounded-xl border-2 border-white text-xl font-bold hover:scale-110 drop-shadow-xl shadow-xl"
            >Preview</button>
        </div>
      </div>
    </>
  )
}

export default Preview
