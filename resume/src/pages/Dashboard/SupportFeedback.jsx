import React from 'react'
import Navbar from '../../Navbar'

function SupportFeedback() {
    return (
        <div>
            <Navbar/>
            {/* <!-- SupportFeedback.html --> */}
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8">Support & Feedback</h2>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    {/* <!-- Help Center --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Help Center</h3>
                        <p className="text-gray-600 mb-4">Browse through frequently asked questions and articles.</p>
                        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Visit Help Center</a>
                    </div>

                    {/* <!-- Contact Support --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Contact Support</h3>
                        <p className="text-gray-600 mb-4">Need further assistance? Contact our support team.</p>
                        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Contact Support</a>
                    </div>

                    {/* <!-- Submit Feedback --> */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Submit Feedback</h3>
                        <p className="text-gray-600 mb-4">Help us improve by sharing your thoughts and suggestions.</p>
                        <a href="/" className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">Submit Feedback</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SupportFeedback
