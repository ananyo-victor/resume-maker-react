import React from 'react'
import { Link } from 'react-router-dom'
// import { AuthContext } from '../FormContext'



function checked() {
    const token = localStorage.getItem('auth-token');
    if (token) {
        const loginTime = localStorage.getItem('login-time');
        // console.log(loginTime);
        
        const currentTime = Date.now();
        // console.log(currentTime);
        
        if (currentTime - loginTime > 3600000) {
            localStorage.removeItem('auth-token');
            localStorage.removeItem('login-time');
        }

    }
}
function Landing() {
    checked();
    // const { isLoggedIn } = useContext(AuthContext);
    return (
        <div>
            <div className="bg-gray-100 text-gray-900">
                {/* Header */}
                <header className="bg-white shadow-md">
                    <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="text-xl font-semibold text-gray-900">
                            <a href="/" className="text-blue-600">ResumeMaker</a>
                        </div>
                        <nav className='flex items-center'>
                            <a href="#features" className="text-gray-600 hover:text-blue-600 mx-3">Features</a>
                            <a href="#pricing" className="text-gray-600 hover:text-blue-600 mx-3">Pricing</a>
                            <a href="#contact" className="text-gray-600 hover:text-blue-600 mx-3">Contact</a>
                            {(localStorage.getItem('auth-token') !== null && localStorage.getItem('auth-token') !== undefined) ? <>
                                <button htmlFor='alpha'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7 border-gray-500 border-2 text-gray-500">
                                    <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" /></svg><Link id='alpha' className='hidden' to='/account'></Link>
                                </button>
                            </> : <>
                                <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 mx-3">Sign In</Link>
                                <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700">Sign Up</Link>
                            </>}
                        </nav>
                    </div>
                </header>

                {/* Hero Section */}
                <section className="bg-blue-600 text-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h1 className="text-4xl font-bold mb-4">Create Your Perfect Resume in Minutes</h1>
                        <p className="text-xl mb-8">Professional templates, easy to customize, and ready to download.</p>
                        <Link to={(localStorage.getItem('auth-token') !== null && localStorage.getItem('auth-token') !== undefined) ? '/dashboard' : '/login'} className="bg-white text-blue-600 px-8 py-4 rounded-full text-xl font-semibold hover:bg-gray-100">Get Started</Link>
                    </div>
                </section>

                {/* Features Section */}
                <section id="features" className="py-20 bg-gray-100">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            <div className="text-center">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
                                <p className="text-gray-600">Our intuitive interface makes it easy to create a resume in minutes.</p>
                            </div>
                            <div className="text-center">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16h10M7 8h10M7 12h4" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
                                <p className="text-gray-600">Choose from a variety of professionally designed templates.</p>
                            </div>
                            <div className="text-center">
                                <div className="mb-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M9 21H3V3h6v4h12v10H9v4z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">Download & Print</h3>
                                <p className="text-gray-600">Download your resume in PDF format and print it whenever you need.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Call to Action Section */}
                <section className="bg-white py-20">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">Ready to Build Your Resume?</h2>
                        <p className="text-xl mb-8">Get started now and create a professional resume in just a few clicks.</p>
                        <Link to={(localStorage.getItem('auth-token') !== null && localStorage.getItem('auth-token') !== undefined) ? "/create-resume" : "/login"} className="bg-blue-600 text-white px-8 py-4 rounded-full text-xl font-semibold hover:bg-blue-700">Create Your Resume</Link>
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-800 text-white py-8">
                    <div className="container mx-auto px-6 text-center">
                        <p>&copy; 2024 ResumeMaker. All rights reserved.</p>
                    </div>
                </footer>
            </div>

        </div>
    )
}

export default Landing
