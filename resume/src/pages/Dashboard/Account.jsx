import React from 'react'
import Navbar from '../../Navbar'

function Account() {
    return (
        <div>
            <Navbar/>
            {/* <!-- Account.html --> */}
            <div className="container mx-auto px-6 py-8">
                {/* <!-- Navigation --> */}

                {/* <!-- Account Information --> */}
                <div className="bg-white shadow-lg rounded-lg p-6">
                    <h2 className="text-3xl font-bold mb-8">Account Details</h2>

                    {/* <!-- User Information --> */}
                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Username:</label>
                        <p className="text-gray-600">John Doe</p>
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
                        <p className="text-gray-600">johndoe@example.com</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Account
