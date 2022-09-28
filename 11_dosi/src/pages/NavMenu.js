import React from 'react'
import { NavLink } from 'react-router-dom'

const navlink = [
    { content: "Market", link: "/sub01" },
    { content: "Class", link: "/sub02" },
    { content: "Subscribe", link: "/sub03" },
    { content: "Review", link: "/sub04" },
]

const NavMenu_L = () => {
    return (
        <ul>
            {
                navlink.slice(0, 2).map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}
const NavMenu_R = () => {
    return (
        <ul>
            {
                navlink.slice(2, 4).map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export { NavMenu_L, NavMenu_R }