import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar'

function Dashboard() {
    return (
        <div>
            <div className="bg-gray-100 text-gray-900">

                {/* Navbar */}
                <Navbar/>

                {/* Dashboard Content */}
                <div className="container mx-auto px-6 py-8">
                    <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Create New Resume */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4">Create New Resume</h2>
                            <p className="text-gray-600 mb-6">Start a new resume with our easy-to-use editor.</p>
                            <Link to="/create-resume" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Create Now</Link>
                        </div>

                        {/* View/Edit Resumes */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4">My Resumes</h2>
                            <p className="text-gray-600 mb-6">View or edit your existing resumes.</p>
                            <Link to="/my-resume" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">View Resumes</Link>
                        </div>

                        {/* Account Settings */}
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <h2 className="text-2xl font-semibold mb-4">Account Settings</h2>
                            <p className="text-gray-600 mb-6">Manage your account settings and preferences.</p>
                            <Link to="/account-setting" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Manage Account</Link>
                        </div>
                    </div>

                    {/* Recent Activity Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <ul className="space-y-4">
                                <li className="flex items-center">
                                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-4 text-gray-700">You successfully created a resume on August 21, 2024.</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-4 text-gray-700">You updated your resume on August 18, 2024.</p>
                                </li>
                                <li className="flex items-center">
                                    <div className="bg-blue-600 text-white rounded-full h-10 w-10 flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <p className="ml-4 text-gray-700">You downloaded a resume on August 15, 2024.</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-6 mt-12">
                    <div className="container mx-auto text-center">
                        <p>&copy; 2024 ResumeMaker. All rights reserved.</p>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Dashboard

