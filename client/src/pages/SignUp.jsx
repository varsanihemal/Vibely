import React from 'react'

const SignUp = () => {
    return (
        <section className="flex justify-center items-center min-h-screen bg-gray-100 px-4 md:px-16">
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800">Vibely</h3>
                    <h1 className="text-4xl font-extrabold text-gray-800 mt-2">Sign Up</h1>
                    <p className="text-gray-500 mt-2">Sign up and enjoy vibing with your friends on Vibely</p>
                </div>

                {/* Form */}
                <form className="flex flex-col gap-4">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-1 text-gray-600 font-semibold">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="John Doe"
                            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="DOB" className="mb-1 text-gray-600 font-semibold">Date Of Birth</label>
                        <input
                            type="date"
                            id="DOB"
                            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-1 text-gray-600 font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@email.com"
                            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
                        />
                    </div>

                    <div className="flex flex-col">
                        <label htmlFor="pass" className="mb-1 text-gray-600 font-semibold">Password</label>
                        <input
                            type="password"
                            id="pass"
                            placeholder="********"
                            className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
                        />
                    </div>

                    <button className="w-full bg-[#2d2d2d] text-white py-3 rounded-xl hover:bg-[#1f1f1f] transition font-semibold mt-2">
                        Sign Up
                    </button>
                </form>

                {/* OR divider */}
                <div className="flex items-center gap-2 my-4">
                    <hr className="flex-1 border-gray-300" />
                    <p className="text-gray-400 font-semibold">OR</p>
                    <hr className="flex-1 border-gray-300" />
                </div>

                {/* Sign In */}
                <p className="text-center text-gray-500">
                    Already Have an Account?{' '}
                    <button className="text-[#2d2d2d] font-semibold hover:underline">
                        Sign In
                    </button>
                </p>
            </div>
        </section>
    )
}

export default SignUp
