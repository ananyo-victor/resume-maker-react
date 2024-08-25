import React from 'react'
import Navbar from '../../Navbar'

function ProfileInformation() {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8">Profile Information</h2>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    <form>
                        {/* Name */}
                        <div className="mb-6">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
                            <input type="text" id="name" className="w-full border border-gray-300 rounded-lg p-3" placeholder="Enter your name" />
                        </div>

                        {/* Email */}
                        <div className="mb-6">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
                            <input type="email" id="email" className="w-full border border-gray-300 rounded-lg p-3" placeholder="Enter your email" />
                        </div>

                        {/* Phone */}
                        <div className="mb-6">
                            <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone</label>
                            <input type="tel" id="phone" className="w-full border border-gray-300 rounded-lg p-3" placeholder="Enter your phone number" />
                        </div>

                        {/* Profile Picture */}
                        <div className="mb-6">
                            <label htmlFor="profilePicture" className="block text-gray-700 font-semibold mb-2">Profile Picture</label>
                            <input type="file" id="profilePicture" className="w-full border border-gray-300 rounded-lg p-3" />
                        </div>

                        {/* Password */}
                        <div className="mb-6">
                            <label htmlFor="currentPassword" className="block text-gray-700 font-semibold mb-2">Current Password</label>
                            <input type="password" id="currentPassword" className="w-full border border-gray-300 rounded-lg p-3" placeholder="Enter current password" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="newPassword" className="block text-gray-700 font-semibold mb-2">New Password</label>
                            <input type="password" id="newPassword" className="w-full border border-gray-300 rounded-lg p-3" placeholder="Enter new password" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm New Password</label>
                            <input type="password" id="confirmPassword" className="w-full border border-gray-300 rounded-lg p-3" placeholder="Confirm new password" />
                        </div>

                        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Save Changes</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default ProfileInformation
