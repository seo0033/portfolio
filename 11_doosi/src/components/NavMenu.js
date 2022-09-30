import React from 'react'
import { NavLink } from 'react-router-dom'

const NAVLINK = [
    { id: 1, content: "Market", link: "/sub01" },
    { id: 2, content: "Class", link: "/sub02" },
    { id: 3, content: "Subscribe", link: "/sub03" },
    { id: 4, content: "Review", link: "/sub04" },
]

const SUBMENU = [

]

const NavMenu_L = () => {
    return (
        <ul>
            {
                NAVLINK.slice(0, 2).map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink>
                            <ul>
                                {
                                    <li></li>
                                }

                            </ul>
                        </li>
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
                NAVLINK.slice(2, 4).map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export { NavMenu_L, NavMenu_R }