import React from 'react'
import {NavLink, useMatch} from 'react-router-dom'

interface CustomLinkProps {
    children?: React.ReactNode,
    to: string
    className?: string
}


const CustomLink = ({children, to, className}: CustomLinkProps) => {
    const match = useMatch(to)
    const activeLinkClassName = `${className} text-red-600`
    return (
        <NavLink
            to={to}
            className={ match ? activeLinkClassName : className }
        >
            {children}
        </NavLink>
    )
}

export default CustomLink
