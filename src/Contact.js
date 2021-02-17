import React from 'react'
import { useSpring, animated } from 'react-spring'

import Nav from './components/Nav'

function Contact() {
    const props = useSpring({
        from: { opacity: 0, marginLeft: -500 },
        to: { opacity: 1, marginLeft: 50 },
        config: { delay: 1000, duration: 1000 }
    })
    const props2 = useSpring({
        from: { opacity: 0, marginLeft: -500 },
        to: { opacity: 1, marginLeft: 50 },
        config: { delay: 1000, duration: 1100 }
    })
    const props3 = useSpring({
        from: { opacity: 0, marginLeft: -500 },
        to: { opacity: 1, marginLeft: 50 },
        config: { delay: 1000, duration: 1200 }
    })
    const props4 = useSpring({
        from: { opacity: 0, marginLeft: -500 },
        to: { opacity: 1, marginLeft: 50 },
        config: { delay: 1000, duration: 1300 }
    })
    const props5 = useSpring({
        from: { opacity: 0, marginLeft: -500 },
        to: { opacity: 1, marginLeft: 50 },
        config: { delay: 1000, duration: 1400 }
    })
    const props6 = useSpring({
        from: { opacity: 0, marginLeft: -500 },
        to: { opacity: 1, marginLeft: 50 },
        config: { delay: 1000, duration: 1500 }
    })
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
                <a className="inContact" href="https://wa.link/qpudym" target="_blank" rel="noopener noreferrer">< animated.div style={props} className="contact">Whatsapp</animated.div></a>
                <a className="inContact" href="tel:+2349077334922" target="_blank" rel="noopener noreferrer">< animated.div style={props2} className="contact">Call me</animated.div></a>
                <a className="inContact" href="mailto:erinfolamibolaji2010@gmail.com?subject=msg: WEB" target="_blank" rel="noopener noreferrer">< animated.div style={props3} className="contact">Gmail</animated.div></a>
                <a className="inContact" href="https://www.linkedin.com/in/kazeem-erinfolami-974739190" target="_blank" rel="noopener noreferrer">< animated.div style={props4} className="contact">Linkedin</animated.div></a>
                <a className="inContact" href="https://twitter.com/ErinKazeem" target="_blank" rel="noopener noreferrer">< animated.div style={props5} className="contact">Twitter</animated.div></a>
                <a className="inContact" href="https://github.com/kazeemerinfolami" target="_blank" rel="noopener noreferrer">< animated.div style={props6} className="contact">Github</animated.div></a>
            </div>
        </>
    )
}

export default Contact
