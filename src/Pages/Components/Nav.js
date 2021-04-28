import React from 'react'
import { NavLink } from "react-router-dom"

function Nav() {
    return (
        <div className="main-nav-Container">
            <nav>
                <div>
                    <NavLink exact to="/" className="navLink">
                        <div className="main-nav-wrapper" >
                            <span className="Home-icon iconify" data-icon="mdi:home-group" data-inline="false"></span>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink exact to="/aboutme" className="navLink" activeClassName="active">
                        <div className="main-nav-wrapper" >
                            <span>About Me</span>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink exact to="/projects" className="navLink" activeClassName="active">
                        <div className="main-nav-wrapper" >
                            <span>Projects</span>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink exact to="/contact" className="navLink" activeClassName="active">
                        <div className="main-nav-wrapper" >
                            <span>Contact Me</span>
                        </div>
                    </NavLink>
                </div>
                {/* <div>
                    <NavLink exact to="/projects" className="navLink" >
                        <div className="main-nav-wrapper" >
                            <span>Projects</span>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink exact to="/aboutme" className="navLink" >
                        <div className="main-nav-wrapper" >
                            <span>About Me</span>
                        </div>
                    </NavLink>
                </div>
                <div>
                    <NavLink exact to="/projects" className="navLink" >
                        <div className="main-nav-wrapper" >
                            <span>Projects</span>
                        </div>
                    </NavLink>
                </div> */}
            </nav>
        </div>
    )
}

export default Nav
