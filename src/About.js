import React from 'react'
import { useSpring, animated } from 'react-spring'
import Nav from './components/Nav'

function About() {
    const props = useSpring({
        from: { opacity: 0, marginTop: -500 },
        to: { opacity: 1, marginTop: 200 },
        config: { delay: 1000, duration: 2000 }
    })
    const text = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 3000, duration: 5000 }
    })
    const text1 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 1000, duration: 6000 }
    })
    const text2 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 1000, duration: 7000 }
    })
    const text3 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 1000, duration: 8000 }
    })
    const text4 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 1000, duration: 10000 }
    })
    const text5 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 1000, duration: 12000 }
    })
    const text6 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 1000, duration: 14000 }
    })
    const text7 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 1000, duration: 16000 }
    })
    const text8 = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 1000, duration: 18000 },
    })
    return (
        <div>
            <Nav />
            <animated.div style={props} className="aboutMeContainer">
                <div className="aboutMeTitle"><span className="about">About</span> Me_</div>
                <animated.div style={text} className="aboutMe">
                    I am Junior Web developer able to build a Web presence from the ground up - from concept,
                    navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable
                    and efficient code using current best practices in Web development. Fast learner,
                    hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools
                    </animated.div>
                <div className="aboutMeTitle2"><span style={{ backgroundColor: "rgb(53, 23, 23)", padding: "0 5px", color: "rgba(255, 255, 0, 0.589)" }}>Languages</span> & Tools_</div>
                <div className="aboutMe">
                    <animated.span style={text1} className="aboutTools">HTML</animated.span> <span>|</span>
                    <animated.span style={text2} className="aboutTools">CSS</animated.span> <span>|</span>
                    <animated.span style={text3} className="aboutTools">JavaScript</animated.span> <span>|</span>
                    <animated.span style={text4} className="aboutTools">React.js</animated.span> <span>|</span>
                    <animated.span style={text5} className="aboutTools">Animations</animated.span> <span>|</span>
                    <animated.span style={text6} className="aboutTools">Redux</animated.span> <span>|</span>
                    <animated.span style={text7} className="aboutTools">TypeScript</animated.span> <span>|</span>
                    <animated.span style={text8} className="aboutTools">GraphQL</animated.span>
                    {/* <span className="aboutTools"></span> <span>|</span>
                    <span className="aboutTools"></span> <span>|</span>
                    <span className="aboutTools"></span> <span>|</span>
                    <span className="aboutTools"></span> <span>|</span>
                    <span className="aboutTools"></span> */}
                </div>
            </animated.div>
        </div>
    )
}

export default About
