import React from 'react'
import { Link, useLocation } from "react-router-dom";

const names1 = [
  { name: "Basic Details", link: "/basic-details" },
  { name: "Work Experience", link: "/work-experience" },
  { name: "Education", link: "/education" },
  { name: "Skills", link: "/skills" },
  { name: "Summary", link: "/summary" },
  { name: "Achievements", link: "/achievement" },
  { name: "Review and Download", link: "/review" }
];
const names2 = [
  { name: "Profile Information", link: "/profile-information" },
  { name: "Subscription & Billing", link: "/subscription-billing" },
  { name: "Security Settings", link: "/security-setting" },
  { name: "Connected Accounts", link: "/connected-accounts" },
  { name: "Privacy & Data", link: "/privacy-data" },
  { name: "Support & Feedback", link: "/support-feedback" }
];
function Navbar() {
  const location = useLocation();
  const logout = (e) => {
    localStorage.removeItem('auth-token');
  }
  return (
    <>
      <nav className="flex h-[60px] w-full items-center justify-between rounded-xl shadow-md md:w-full">
        <div className="mx-auto flex h-7 w-9 items-center justify-center rounded-xl hover:bg-white lg:hidden"><Link to="/basic-details"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
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
            {names1.map((Name, index) => {
              return (
                <li key={index} className="mt-3 flex justify-center font-bold lg:text-xl"><Link to={Name.link} className={`rounded-xl ${Name.link === location.pathname ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white'} hover:px-5 hover:py-2`}>{Name.name}</Link></li>
              )
            })}
          </ul>
        </span>

        <div className="m-4 hidden items-center justify-self-center lg:flex lg:w-48">
          {/* <img src="/" alt="w-name" className="hide flex h-14 w-16 items-center justify-center bg-white" /> */}
          <p className="hide ml-4 flex h-8 w-32 items-center justify-center text-xl text-blue-600 font-semibold"><Link to="/dashboard">ResumeMaker</Link></p>
        </div>

        <div className="lg:block hidden">
          <ul className="flex items-center justify-evenly">

            {(location.pathname === '/profile-information' || location.pathname === '/subscription-billing' || location.pathname === '/security-setting' || location.pathname === '/connected-accounts' || location.pathname === '/privacy-data' || location.pathname === '/support-feedback') &&
              names2.map((Name, index) => {
                return (
                  <li key={index} id={Name.name} className={`w-fit py-1.5 px-2 mx-1 cursor-pointer rounded-full font-semibold  hover:scale-110 ${Name.link === location.pathname ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white'}`}>
                    <Link to={Name.link}>{Name.name}</Link>
                  </li>
                )
              })}

            {(location.pathname === '/basic-details' || location.pathname === '/work-experience' || location.pathname === '/education' || location.pathname === '/skills' || location.pathname === '/summary' || location.pathname === '/achievement' || location.pathname === '/review') && names1.map((Name, index) => {
              return (
                <li key={index} id={Name.name} className={`w-fit py-1.5 px-2 cursor-pointer rounded-full ${Name.link === location.pathname ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white'} font-semibold  hover:scale-110`}>
                  <Link to={Name.link}>{Name.name}</Link>
                </li>
              )
            })}

            {(location.pathname === '/dashboard' || location.pathname === '/account' || location.pathname === '/my-resume' || location.pathname === '/create-resume' || location.pathname === '/account-setting') && <div>
              <Link to="/dashboard" className="text-gray-600 hover:text-blue-600 mx-3">Home</Link>
              <Link to="/account" className="text-gray-600 hover:text-blue-600 mx-3">Account</Link>
              <Link to="/" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-red-700" onClick={logout}>Log Out</Link>
            </div>
            }
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar
