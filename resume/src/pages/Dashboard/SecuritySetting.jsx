import React from 'react'
import Navbar from '../../Navbar'

function SecuritySetting() {
    return (
        <div>
            <Navbar/>
            {/* <!-- SecuritySettings.html --> */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8">Security Settings</h2>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    {/* <!-- Password Section --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Change Password</h3>
                        <form>
                            <div className="mb-4">
                                <label HtmlFor="currentPassword" className="block text-gray-700 font-semibold mb-2">Current Password</label>
                                <input type="password" id="currentPassword" className="w-full border border-gray-300 rounded-lg p-3" placeholder="Enter current password" />
                            </div>
                            <div className="mb-4">
                                <label HtmlFor="newPassword" className="block text-gray-700 font-semibold mb-2">New Password</label>
                                <input type="password" id="newPassword" className="w-full border border-gray-300 rounded-lg p-3" placeholder="Enter new password" />
                            </div>
                            <div className="mb-4">
                                <label HtmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm New Password</label>
                                <input type="password" id="confirmPassword" className="w-full border border-gray-300 rounded-lg p-3" placeholder="Confirm new password" />
                            </div>
                            <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Update Password</button>
                        </form>
                    </div>

                    {/* <!-- Two-Factor Authentication Section --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Two-Factor Authentication (2FA)</h3>
                        <p className="text-gray-600 mb-4">Enhance the security of your account by enabling two-factor authentication.</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Enable 2FA</button>
                    </div>

                    {/* <!-- Session Management Section --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Manage Sessions</h3>
                        <p className="text-gray-600 mb-4">Review and manage all devices logged into your account.</p>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span>Chrome on Windows - Last Active: August 20, 2024</span>
                                <a href="/" className="text-blue-600 hover:underline">Log Out</a>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Safari on iPhone - Last Active: August 19, 2024</span>
                                <a href="/" className="text-blue-600 hover:underline">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SecuritySetting
