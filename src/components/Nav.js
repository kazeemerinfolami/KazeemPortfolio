import React, { useState } from 'react'
import { Link, withRouter } from "react-router-dom"
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';




function Nav({ location, history }) {
    const [clicked, setClicked] = useState(false)

    const isAuth = (path) => {
        if (location.pathname === path) {
            return {
                color: "rgba(255, 255, 0, 0.589)", borderBottom: "3px solid rgb(35, 80, 35)", width: "50%", paddingBottom: "4px"
            }
        } else {
            return { color: "" }
        }
    }
    const handleClick = () => {
        setClicked(!clicked)
    }
    const nav = () => (
        <>
            <div>
                <Link to="/" ><span className="logoName">Kazeem</span>Portfolio</Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
                {/* <Link className={clicked ? <MenuOutlinedIcon /> : <CloseOutlinedIcon/>} onClick={myFunction}><MenuOutlinedIcon /></Link> */}
                <i className={clicked ? "fa fa-times" : "fas fa-bars"} ></i>
            </div>
            <div className={clicked ? "nav-menu active" : "nava"}>
                <Link className="nava" style={isAuth("/")} to="/">Home</Link>
                <Link className="nava" style={isAuth("/about")} to="/about">About</Link>
                <Link className="nava" style={isAuth("/project")} to="/project">projects</Link>
                <Link className="nava" style={isAuth("/contact")} to="/contact">contact</Link>
            </div>
        </>
    )
    return (
        <header className="nav">
            {nav()}
        </header>
    )
}

export default withRouter(Nav)
