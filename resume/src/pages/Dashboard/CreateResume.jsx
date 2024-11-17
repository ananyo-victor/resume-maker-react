import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar'

function CreateResume() {
    return (
        <div>
            <Navbar/>
            {/* <!-- CreateResumeTemplateSelection.html --> */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8">Create Your Resume</h2>

                {/* <!-- Template Selection --> */}
                <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h3 className="text-2xl font-semibold mb-4">Select a Template</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* <!-- Template 1 --> */}
                        <div className="border border-gray-300 rounded-lg p-4">
                            <img src="template1.jpg" alt="Template 1" className="mb-4 rounded-lg" />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">Select Template 1</button>
                        </div>
                        {/* <!-- Template 2 --> */}
                        <div className="border border-gray-300 rounded-lg p-4">
                            <img src="template2.jpg" alt="Template 2" className="mb-4 rounded-lg" />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">Select Template 2</button>
                        </div>
                        {/* <!-- Template 3 --> */}
                        <div className="border border-gray-300 rounded-lg p-4">
                            <img src="template3.jpg" alt="Template 3" className="mb-4 rounded-lg" />
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">Select Template 3</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Section Tracker --> */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-2xl font-semibold mb-4">Resume Sections</h3>
                    <ul className="space-y-4">
                        {/* <!-- Heading Section --> */}
                        <li className="flex justify-between items-center">
                            <Link to="/basic-details" className="text-blue-600 hover:underline">Basic Details</Link>
                            <span className="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Work History Section --> */}
                        <li className="flex justify-between items-center">
                            <Link to="/work-experience" className="text-blue-600 hover:underline">Work History</Link>
                            <span className="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Education Section --> */}
                        <li className="flex justify-between items-center">
                            <Link to="/education" className="text-blue-600 hover:underline">Education</Link>
                            <span className="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Skill Section --> */}
                        <li className="flex justify-between items-center">
                            <Link to="/skills" className="text-blue-600 hover:underline">Skills</Link>
                            <span className="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Summary Section --> */}
                        <li className="flex justify-between items-center">
                            <Link to="/summary" className="text-blue-600 hover:underline">Summary</Link>
                            <span className="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Achievements Section --> */}
                        <li className="flex justify-between items-center">
                            <Link to="/achievements" className="text-blue-600 hover:underline">Achievements</Link>
                            <span className="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Review and Download Section --> */}
                        <li className="flex justify-between items-center">
                            <Link to="/review" className="text-blue-600 hover:underline">Review and Download</Link>
                            <span className="text-gray-600">Not Completed</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CreateResume
