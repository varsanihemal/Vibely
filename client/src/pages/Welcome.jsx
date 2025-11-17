import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
    const navigate = useNavigate()

    return (
        <div className="h-screen w-full bg-cover bg-center bg-no-repeat relative bg-[url('/src/assets/bgImage.jpg')]">
            {/* Overlay to improve text readability */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Header */}
            <header className="relative flex justify-between items-center px-8 py-6 text-white z-10">
                <h1 className="text-3xl font-extrabold tracking-wide">Vibely</h1>
                <div className="flex gap-4">
                    <button
                        onClick={() => navigate('/login')}
                        className="px-6 py-2 rounded-xl border border-white hover:bg-white hover:text-black transition"
                    >
                        Log In
                    </button>
                    <button
                        onClick={() => navigate('/signup')}
                        className="px-6 py-2 rounded-xl bg-white text-black hover:bg-gray-200 transition"
                    >
                        Sign Up
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="relative z-10 flex flex-col-reverse md:flex-row items-center justify-between px-8 md:px-16 py-12 gap-8 text-white">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold">Welcome to Vibely</h2>
                    <p className="text-lg md:text-xl leading-relaxed">
                        In a world that moves fast, Vibely helps you slow down and enjoy the moments that matter.
                        Share your daily stories, express your style, and connect with a community that appreciates authenticity and creativity.
                    </p>
                    <div className="mt-4">
                        <p className="text-lg font-semibold mb-2">Join Us Today</p>
                        <div className="flex gap-4">
                            <button
                                onClick={() => navigate('/login')}
                                className="px-6 py-2 rounded-xl border border-white hover:bg-white hover:text-black transition"
                            >
                                Log In
                            </button>
                            <button
                                onClick={() => navigate('/signup')}
                                className="px-6 py-2 rounded-xl bg-white text-black hover:bg-gray-200 transition"
                            >
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-center">
                    <img
                        src="./src/assets/friends1.jpg"
                        alt="Friends"
                        className="rounded-xl shadow-xl max-w-full max-h-[500px] w-auto h-auto object-cover"
                    />
                </div>
            </main>
        </div>
    )
}

export default Welcome
