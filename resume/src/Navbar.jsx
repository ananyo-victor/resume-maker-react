import React from 'react'

function Navbar() {
  return (
    <>
      <nav className="flex h-[60px] w-full items-center justify-between rounded-xl shadow-md md:w-full bg-white">
        <div className="mx-auto flex h-7 w-9 items-center justify-center rounded-xl hover:bg-white lg:hidden"><a href="heading.html">&larr;</a></div>
        <button className="mx-auto flex h-10 w-48 items-center justify-center rounded-xl text-xl font-bold hover:bg-white lg:hidden" onclick="open1()">Work Experience</button>
        <div className="mx-auto flex h-7 w-9 items-center justify-center rounded-xl hover:bg-white lg:hidden"><a href="education.html">&rarr;</a></div>
        <span id="miniWindow" className="yellow-lite yellow-border absolute top-0 left-[50%] mx-auto hidden h-60 w-60 translate-x-[-50%] rounded-xl bg-white shadow-2xl">
          <ul className="flex-col items-center px-4">
            <li className="mt-3 flex justify-center font-bold lg:text-xl"><a href="heading.html" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Heading</a></li>
            <li className="mt-3 flex justify-center text-2xl font-bold lg:text-xl"><a href="workExperience.html" className="rounded-xl hover:bg-white hover:px-5 hover:py-2" onclick="open1()">Work History</a></li>
            <li className="mt-3 flex justify-center font-bold lg:text-xl"><a href="education.html" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Education</a></li>
            <li className="mt-3 flex justify-center font-bold lg:text-xl"><a href="skill.html" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Skill</a></li>
            <li className="mt-3 flex justify-center font-bold lg:text-xl"><a href="summary.html" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Summary</a></li>
            <li className="my-3 flex justify-center font-bold lg:text-xl"><a href="review.html" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Review and Download</a></li>
          </ul>
        </span>
        <div className="m-4 hidden items-center justify-self-center lg:flex lg:w-48">
          <img src="/" alt="w-name" className="hide flex h-14 w-16 items-center justify-center bg-white" />
          <p className="hide ml-4 flex h-8 w-32 items-center justify-center rounded-xl bg-white font-bold">website name</p>
        </div>
        <div className="hide lg:w-[800px]">
          <ul className="flex items-center justify-evenly">
            <li id="heading" className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <a href="heading.html">Heading</a>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <a href="workExperience.html">Work History</a>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <a href="education.html">Education</a>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <a href="skill.html">Skill</a>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <a href="summary.html">Summary</a>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <a href="review.html">Review and Download</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
