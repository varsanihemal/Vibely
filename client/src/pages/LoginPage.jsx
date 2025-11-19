import React from 'react';
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';
import Button from '../components/Button';

import f1 from '../assets/friends1.jpg';
import f2 from '../assets/friends2.jpg';
import f3 from '../assets/friends3.jpg';
import f4 from '../assets/friends4.jpg';

const LoginPage = () => {
    const navigate = useNavigate();

    // Handle form submission
    const handleLogin = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            const res = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                const userName = data.name;
                alert(`Welcome back, ${userName}!`);
                navigate("/home");
            } else {
                alert(data.error || "Login failed");
            }
        } catch (err) {
            console.error(err);
            alert('Server error. Please try again.');
        }
    };

    return (
        <section className="flex flex-col md:flex-row justify-center items-center h-screen bg-gray-100 px-4 md:px-16 gap-12">

            {/* Overlapping Images */}
            <div className="relative w-[500px] h-[500px] md:w-[600px] md:h-[600px]">
                <img src={f1} alt="" className="w-[340px] rounded-xl shadow-2xl absolute top-6 left-6 -rotate-6" />
                <img src={f2} alt="" className="w-[380px] rounded-xl shadow-2xl absolute top-12 left-32 rotate-4" />
                <img src={f3} alt="" className="w-[340px] rounded-xl shadow-2xl absolute top-48 left-16 rotate-8" />
                <img src={f4} alt="" className="w-[320px] rounded-xl shadow-2xl absolute top-80 left-65 rotate-106" />
            </div>

            {/* Login Form */}
            <form onSubmit={handleLogin} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 w-full max-w-md">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Vibely</h1>

                <div className="flex flex-col gap-4">
                    <TextInput label="Email Address" type="email" name="email" placeholder="Enter your email" />
                    <TextInput label="Password" type="password" name="password" placeholder="Enter your password" />

                    <Button type="primary">Log In</Button>

                    <div className="flex items-center gap-2 mt-2">
                        <hr className="flex-1 border-gray-300" />
                        <p className="text-gray-400 font-semibold">OR</p>
                        <hr className="flex-1 border-gray-300" />
                    </div>

                    <Button type="secondary">Forgotten your Password</Button>
                </div>

                <p className="text-center text-gray-500 mt-6">
                    Don't have an account?{' '}
                    <Button onClick={() => navigate('/signup')} type="secondary">
                        Sign Up
                    </Button>
                </p>
            </form>
        </section>
    );
};

export default LoginPage;
