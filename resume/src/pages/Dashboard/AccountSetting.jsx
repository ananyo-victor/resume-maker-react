import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Navbar'

function AccountSetting() {
    return (
        <div>
            {/* Navbar */}
            <Navbar/>
            <div className="container mx-auto px-6 py-8">
                
                <h2 className="text-3xl font-bold mb-8">Account Settings</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Profile Information */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Profile Information</h3>
                        <p className="text-gray-600 mb-6">Update your personal details and password.</p>
                        <Link to="/profile-information" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Edit Profile</Link>
                    </div>

                    {/* Subscription & Billing */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Subscription & Billing</h3>
                        <p className="text-gray-600 mb-6">Manage your subscription plan and payment methods.</p>
                        <Link to="/subscription-billing" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">View Subscription</Link>
                    </div>

                    {/* Security Settings */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Security Settings</h3>
                        <p className="text-gray-600 mb-6">Enhance your account security and manage sessions.</p>
                        <Link to="/security-setting" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Manage Security</Link>
                    </div>

                    {/* Connected Accounts */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Connected Accounts</h3>
                        <p className="text-gray-600 mb-6">Link or unlink your social accounts.</p>
                        <Link to="/connected-accounts" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Manage Connections</Link>
                    </div>

                    {/* Privacy & Data */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Privacy & Data</h3>
                        <p className="text-gray-600 mb-6">Control your data sharing preferences and download data.</p>
                        <Link to="/privacy-data" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Manage Privacy</Link>
                    </div>

                    {/* Support & Feedback */}
                    <div className="bg-white shadow-lg rounded-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Support & Feedback</h3>
                        <p className="text-gray-600 mb-6">Get help or provide feedback.</p>
                        <Link to="/support-feedback" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Get Support</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AccountSetting
