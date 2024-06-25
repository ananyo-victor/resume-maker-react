import React from 'react'
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <>
      <nav className="flex h-[60px] w-full items-center justify-between rounded-xl shadow-md md:w-full">
        <div className="mx-auto flex h-7 w-9 items-center justify-center rounded-xl hover:bg-white lg:hidden"><Link to="/heading"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
        </Link></div>

        <button className="mx-auto flex h-10 w-48 items-center justify-center rounded-xl text-xl font-bold hover:bg-white lg:hidden">Work Experience</button>

        <div className="mx-auto flex h-7 w-9 items-center justify-center rounded-xl hover:bg-white lg:hidden"><Link to="/education"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
        </Link></div>

        <span id="miniWindow" className="yellow-lite yellow-border absolute top-0 left-[50%] mx-auto hidden h-60 w-60 translate-x-[-50%] rounded-xl bg-white shadow-2xl">
          <ul className="flex-col items-center px-4">
            <li className="mt-3 flex justify-center font-bold lg:text-xl"><Link to="/basic-details" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Heading</Link></li>
            <li className="mt-3 flex justify-center text-2xl font-bold lg:text-xl"><Link to="/work-experience" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Work History</Link></li>
            <li className="mt-3 flex justify-center font-bold lg:text-xl"><Link to="/education" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Education</Link></li>
            <li className="mt-3 flex justify-center font-bold lg:text-xl"><Link to="/skills" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Skill</Link></li>
            <li className="mt-3 flex justify-center font-bold lg:text-xl"><Link to="/summary" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Summary</Link></li>
            <li className="my-3 flex justify-center font-bold lg:text-xl"><Link to="/review" className="rounded-xl hover:bg-white hover:px-5 hover:py-2">Review and Download</Link></li>
          </ul>
        </span>

        <div className="m-4 hidden items-center justify-self-center lg:flex lg:w-48">
          <img src="/" alt="w-name" className="hide flex h-14 w-16 items-center justify-center bg-white" />
          <p className="hide ml-4 flex h-8 w-32 items-center justify-center rounded-xl bg-white font-bold">website name</p>
        </div>

        <div className="lg:block hidden lg:w-[800px]">
          <ul className="flex items-center justify-evenly">
            <li id="heading" className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <Link to="/basic-details">Heading</Link>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <Link to="/work-experience">Work History</Link>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <Link to="/education">Education</Link>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <Link to="/skills">Skill</Link>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <Link to="/summary">Summary</Link>
            </li>
            <li className="w-fit py-1.5 px-2 cursor-pointer rounded-lg font-bold hover:bg-white hover:scale-110">
              <Link to="/review">Review and Download</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
