import React from 'react'
import CustomLink from '../components/CustomLink'

const Navigation = () => {
    return (
        <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-blue-400 text-white">
            <h3 className="font-bold text-emerald-50">Erp for User</h3>
            <span>
                <CustomLink to="/" className="mr-3">Home</CustomLink>
                 <CustomLink to="/about">About</CustomLink>
            </span>
        </nav>
    )
}

export default Navigation
