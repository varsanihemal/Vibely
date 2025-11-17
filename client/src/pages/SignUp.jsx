import React from 'react'
import TextInput from '../components/TextInput'
import Button from '../components/Button'

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
                    <TextInput label="Your Name" name="name" placeholder="John Doe" />
                    <TextInput label="Date Of Birth" type="date" name="DOB" />
                    <TextInput label="Email" type="email" name="email" placeholder="example@email.com" />
                    <TextInput label="Password" type="password" name="pass" placeholder="********" />

                    <Button type="primary">Sign Up</Button>
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
                    <Button type="secondary">Sign In</Button>
                </p>
            </div>
        </section>
    )
}

export default SignUp
