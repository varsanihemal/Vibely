import React from 'react'

const Button = ({ children, type = 'primary', onClick }) => {
    const baseStyle = 'px-6 py-3 rounded-xl font-semibold transition w-full'
    const styles = {
        primary: 'bg-[#2d2d2d] text-white hover:bg-[#1f1f1f]',
        secondary: 'border border-[#2d2d2d] text-[#2d2d2d] hover:bg-[#2d2d2d] hover:text-white',
    }

    return (
        <button onClick={onClick} className={`${baseStyle} ${styles[type]}`}>
            {children}
        </button>
    )
}

export default Button
