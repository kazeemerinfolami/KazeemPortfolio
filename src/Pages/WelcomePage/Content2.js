import React from 'react'
import { NavLink } from 'react-router-dom';

function Content2() {
    return (
        <div>
            <div className="welcome-wrapper">
                <nav>
                    <div>
                        <NavLink exact to="/aboutme" className="navLink" >
                            <div className="nav-wrapper" >
                                <span className="nav-icon iconify" data-icon="icomoon-free:cool" data-inline="false"></span>
                                <span>About Me</span>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink exact to="/projects" className="navLink" >
                            <div className="nav-wrapper" >
                                <span className="nav-icon iconify" data-icon="simple-icons:codeproject" data-inline="false"></span>
                                <span>Projects</span>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink exact to="/contact" className="navLink" >
                            <div className="nav-wrapper" >
                                <span className="nav-icon iconify" data-icon="ic:round-connect-without-contact" data-inline="false"></span>
                                <span>Contact Me</span>
                            </div>
                        </NavLink>
                    </div>
                    {/* <div>
                        <NavLink exact to="/projects" className="navLink" >
                            <div className="nav-wrapper" >
                                <span className="nav-icon iconify" data-icon="simple-icons:codeproject" data-inline="false"></span>
                                <span>Projects</span>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink exact to="/aboutme" className="navLink" >
                            <div className="nav-wrapper" >
                                <span className="nav-icon iconify" data-icon="bx:bxs-wink-smile" data-inline="false"></span>
                                <span>About Me</span>
                            </div>
                        </NavLink>
                    </div>
                    <div>
                        <NavLink exact to="/projects" className="navLink" >
                            <div className="nav-wrapper" >
                                <span className="nav-icon iconify" data-icon="simple-icons:codeproject" data-inline="false"></span>
                                <span>Projects</span>
                            </div>
                        </NavLink>
                    </div> */}
                </nav>
            </div>
        </div>
    )
}

export default Content2
