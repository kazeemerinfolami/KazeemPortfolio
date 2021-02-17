import React from "react"
import { useSpring, animated } from 'react-spring'


function CV() {

    const button = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 1000, duration: 2000 }
    })
    return (
        <>
            <animated.div style={button} className="cvContainer">
                <a href="https://drive.google.com/file/d/1KKBGdOV2K9rSC5yCyYOCi8jrZTGyDEix/view" target="_blank" rel="noopener noreferrer"><button className="downloadCV">Download CV</button></a>
            </animated.div>
        </>
    )
}

export default CV
