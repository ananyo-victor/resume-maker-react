import React from 'react'
import Navbar from '../../Navbar'

function MyResume() {
    return (
        <div>
            <Navbar/>
            {/* <!-- MyResumes.html --> */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8">My Resumes</h2>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    {/* <!-- Resume List --> */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* <!-- Resume Card --> */}
                        <div className="border border-gray-300 rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-4">Resume Title 1</h3>
                            <p className="text-gray-600 mb-4">Created on: July 23, 2024</p>
                            <div className="flex space-x-2">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Edit</button>
                                <button className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700">Download</button>
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">Delete</button>
                            </div>
                        </div>

                        {/* <!-- Another Resume Card Example --> */}
                        <div className="border border-gray-300 rounded-lg p-4">
                            <h3 className="text-xl font-semibold mb-4">Resume Title 2</h3>
                            <p className="text-gray-600 mb-4">Created on: August 1, 2024</p>
                            <div className="flex space-x-2">
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Edit</button>
                                <button className="bg-gray-600 text-white px-4 py-2 rounded-full hover:bg-gray-700">Download</button>
                                <button className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700">Delete</button>
                            </div>
                        </div>

                        {/* <!-- More Resume Cards as Needed --> */}
                        {/* <!-- Add more cards following the same structure --> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MyResume
