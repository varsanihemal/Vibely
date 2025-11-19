import React from 'react'

const TextInput = ({ label, type = 'text', placeholder, name, onChange }) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="mb-1 text-gray-600 font-semibold">{label}</label>
            <input
                onChange={onChange}
                type={type}
                id={name}
                name={name}
                placeholder={placeholder}
                className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#2d2d2d]"
            />
        </div>
    )
}

export default TextInput
