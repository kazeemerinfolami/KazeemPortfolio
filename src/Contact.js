import React from 'react'
import Nav from './components/Nav'

function Contact() {
    return (
        <>
            <Nav />
            <div className="contactInfoContainer">
                <div className="contactinfo">
                    <div >Kazeem Bolaji Erinfolami_</div>
                    <div>Software Developer 👨🏽‍💻</div>
                </div>

            </div>
            <div className="contactContainer">
                <a className="inContact" href="https://wa.link/qpudym" target="_blank" rel="noopener noreferrer"><div className="contact">Whatsapp</div></a>
                <a className="inContact" href="tel:+2349077334922" target="_blank" rel="noopener noreferrer"><div className="contact">call me</div></a>
                <a className="inContact" href="mailto:erinfolamibolaji2010@gmail.com?subject=msg: WEB" target="_blank" rel="noopener noreferrer"><div className="contact">Gmail</div></a>
                <a className="inContact" href="https://www.linkedin.com/in/kazeem-erinfolami-974739190" target="_blank" rel="noopener noreferrer"><div className="contact">linkedin</div></a>
                <a className="inContact" href="https://twitter.com/ErinKazeem" target="_blank" rel="noopener noreferrer"><div className="contact">Twitter</div></a>
                <a className="inContact" href="https://github.com/kazeemerinfolami" target="_blank" rel="noopener noreferrer"><div className="contact">Github</div></a>
            </div>
        </>
    )
}

export default Contact
