import React from 'react'

function Preview(props) {
  return (
    <>
     <div className="mt-8 flex items-center justify-between">
                <div className="ml-5">
                    <p className="text-3xl font-bold lg:text-4xl">{props.Name}</p>
                    <p className="mt-4 text-xl font-semibold lg:text-xl">{props.Desc}</p>
                </div>
                <button
                    className="mr-4 h-11 w-12 rounded-xl border-2 border-white font-bold hover:bg-white hover:text-pink-300 md:hidden"
                    onclick="preview1()">p</button>
                <button
                    className="hide2 mr-4 h-10 rounded-xl border-2 border-white text-lg font-bold hover:bg-white hover:text-pink-300 md:w-28 lg:hidden"
                    onclick="preview1()">preview</button>
                <button
                    className="hide mr-4 h-10 rounded-xl border-4 border-white text-lg font-semibold hover:bg-white hover:text-pink-400 md:w-28 lg:h-14 lg:w-36 lg:text-2xl lg:font-bold shadow-xl"
                    onclick="preview1()">preview</button>
            </div> 
    </>
  )
}

export default Preview
