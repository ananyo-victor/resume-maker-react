import React from 'react'
import Navbar from '../../Navbar'

function ConnectedAccounts() {
    return (
        <div>
            <Navbar/>
            {/* <!-- ConnectedAccounts.html --> */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8">Connected Accounts</h2>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    {/* <!-- Social Logins --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Social Logins</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span>Google Account</span>
                                <a href="/" className="text-blue-600 hover:underline">Unlink</a>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Facebook Account</span>
                                <a href="/" className="text-blue-600 hover:underline">Unlink</a>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>LinkedIn Account</span>
                                <a href="/" className="text-blue-600 hover:underline">Unlink</a>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- Third-Party Services --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Third-Party Services</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span>Dropbox</span>
                                <a href="/" className="text-blue-600 hover:underline">Disconnect</a>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Google Drive</span>
                                <a href="/" className="text-blue-600 hover:underline">Disconnect</a>
                            </li>
                        </ul>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 mt-4">Connect New Service</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ConnectedAccounts
