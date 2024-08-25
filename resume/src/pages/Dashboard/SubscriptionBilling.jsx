import React from 'react'
import Navbar from '../../Navbar'

function SubscriptionBilling() {
    return (
        <div>
            <Navbar/>
            <div className="container mx-auto px-6 py-8">
                <h2 className="text-3xl font-bold mb-8">Subscription & Billing</h2>

                <div className="bg-white shadow-lg rounded-lg p-6">
                    {/* Current Subscription Plan */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Current Plan: Premium</h3>
                        <p className="text-gray-600">You are on the Premium plan. Your next billing date is September 1, 2024.</p>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 mt-4">Upgrade Plan</button>
                    </div>

                    {/* Billing History */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Billing History</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span>Invoice #1234 - August 2024</span>
                                <a href="/" className="text-blue-600 hover:underline">Download PDF</a>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Invoice #1233 - July 2024</span>
                                <a href="/" className="text-blue-600 hover:underline">Download PDF</a>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Invoice #1232 - June 2024</span>
                                <a href="/" className="text-blue-600 hover:underline">Download PDF</a>
                            </li>
                        </ul>
                    </div>

                    {/* Payment Methods */}
                    <div className="mb-6">
                        <h3 className="text-2xl font-semibold mb-4">Payment Methods</h3>
                        <ul className="space-y-4">
                            <li className="flex justify-between items-center">
                                <span>Visa ending in 1234</span>
                                <a href="/" className="text-blue-600 hover:underline">Remove</a>
                            </li>
                            <li className="flex justify-between items-center">
                                <span>Mastercard ending in 5678</span>
                                <a href="/" className="text-blue-600 hover:underline">Remove</a>
                            </li>
                        </ul>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 mt-4">Add New Payment Method</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SubscriptionBilling
