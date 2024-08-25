import React from 'react'
import Navbar from '../../Navbar'

function PrivacyData() {
    return (
        <div>
            <Navbar/>
            {/* <!-- PrivacyData.html --> */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8">Privacy & Data</h2>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    {/* <!-- Data Download --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Download Your Data</h3>
                        <p className="text-gray-600 mb-4">Request a copy of your data in a downloadable format.</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Download Data</button>
                    </div>

                    {/* <!-- Delete Account --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Delete Account</h3>
                        <p className="text-red-600 mb-4">Warning: Deleting your account will remove all your data permanently.</p>
                        <button className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700">Delete My Account</button>
                    </div>

                    {/* <!-- Data Sharing Preferences --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Data Sharing Preferences</h3>
                        <p className="text-gray-600 mb-4">Control how your data is shared with third parties.</p>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span>Allow sharing with job boards</span>
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Allow sharing with marketing partners</span>
                                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default PrivacyData
