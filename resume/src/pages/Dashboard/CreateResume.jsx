import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar'

function CreateResume() {
    return (
        <div>
            <Navbar/>
            {/* <!-- CreateResumeTemplateSelection.html --> */}
            <div class="container mx-auto px-6 py-8">
                <h2 class="text-3xl font-bold mb-8">Create Your Resume</h2>

                {/* <!-- Template Selection --> */}
                <div class="bg-white shadow-lg rounded-lg p-6 mb-8">
                    <h3 class="text-2xl font-semibold mb-4">Select a Template</h3>
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* <!-- Template 1 --> */}
                        <div class="border border-gray-300 rounded-lg p-4">
                            <img src="template1.jpg" alt="Template 1" class="mb-4 rounded-lg" />
                            <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">Select Template 1</button>
                        </div>
                        {/* <!-- Template 2 --> */}
                        <div class="border border-gray-300 rounded-lg p-4">
                            <img src="template2.jpg" alt="Template 2" class="mb-4 rounded-lg" />
                            <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">Select Template 2</button>
                        </div>
                        {/* <!-- Template 3 --> */}
                        <div class="border border-gray-300 rounded-lg p-4">
                            <img src="template3.jpg" alt="Template 3" class="mb-4 rounded-lg" />
                            <button class="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 w-full">Select Template 3</button>
                        </div>
                    </div>
                </div>

                {/* <!-- Section Tracker --> */}
                <div class="bg-white shadow-lg rounded-lg p-6">
                    <h3 class="text-2xl font-semibold mb-4">Resume Sections</h3>
                    <ul class="space-y-4">
                        {/* <!-- Heading Section --> */}
                        <li class="flex justify-between items-center">
                            <Link to="/basic-details" class="text-blue-600 hover:underline">Basic Details</Link>
                            <span class="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Work History Section --> */}
                        <li class="flex justify-between items-center">
                            <Link to="/work-experience" class="text-blue-600 hover:underline">Work History</Link>
                            <span class="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Education Section --> */}
                        <li class="flex justify-between items-center">
                            <Link to="/education" class="text-blue-600 hover:underline">Education</Link>
                            <span class="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Skill Section --> */}
                        <li class="flex justify-between items-center">
                            <Link to="/skills" class="text-blue-600 hover:underline">Skills</Link>
                            <span class="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Summary Section --> */}
                        <li class="flex justify-between items-center">
                            <Link to="/summary" class="text-blue-600 hover:underline">Summary</Link>
                            <span class="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Achievements Section --> */}
                        <li class="flex justify-between items-center">
                            <Link to="/achievements" class="text-blue-600 hover:underline">Achievements</Link>
                            <span class="text-gray-600">Not Completed</span>
                        </li>

                        {/* <!-- Review and Download Section --> */}
                        <li class="flex justify-between items-center">
                            <Link to="/review" class="text-blue-600 hover:underline">Review and Download</Link>
                            <span class="text-gray-600">Not Completed</span>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default CreateResume
