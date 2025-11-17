import React from 'react'

const LoginPage = () => {
    return (
        <section className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-100 px-4 md:px-16 gap-12">

            {/* Overlapping Images Section */}
            <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
                <img
                    src="./src/assets/friends1.jpg"
                    alt=""
                    className="w-[340px] rounded-xl shadow-2xl absolute top-6 left-6 -rotate-6"
                />
                <img
                    src="./src/assets/friends2.jpg"
                    alt=""
                    className="w-[380px] rounded-xl shadow-2xl absolute top-12 left-32 rotate-4"
                />
                <img
                    src="./src/assets/friends3.jpg"
                    alt=""
                    className="w-[340px] rounded-xl shadow-2xl absolute top-48 left-16 rotate-8"
                />
                <img
                    src="./src/assets/friends4.jpg"
                    alt=""
                    className="w-[320px] rounded-xl shadow-2xl absolute top-80 left-65 rotate-106"
                />
            </div>



            {/* Login Form Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Vibely</h1>

                <div className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Email Address..."
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
                    />
                    <button className="w-full bg-[#2d2d2d] text-white py-3 rounded-xl hover:bg-[#1f1f1f] transition font-semibold">
                        Log In
                    </button>

                    <div className="flex items-center gap-2 mt-2">
                        <hr className="flex-1 border-gray-300" />
                        <p className="text-gray-400 font-semibold">OR</p>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    <button className="w-full text-[#2d2d2d] py-3 rounded-xl border border-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white transition font-semibold mt-2">
                        Forgotten your Password
                    </button>
                </div>

                <p className="text-center text-gray-500 mt-6">
                    Don't have an account?{' '}
                    <button className="text-[#2d2d2d] font-semibold hover:underline">
                        Sign Up
                    </button>
                </p>
            </div>
        </section>
    )
}

export default LoginPage
