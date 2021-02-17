import React from 'react'
import { useSpring, animated } from 'react-spring'
import Nav from './components/Nav'
import p11 from "../src/img/projPic/p1.1.png"
import p12 from "../src/img/projPic/p1.2.png"
import p13 from "../src/img/projPic/p1.3.png"
import p14 from "../src/img/projPic/p1.4.png"
import p15 from "../src/img/projPic/p1.5.png"
import p16 from "../src/img/projPic/p1.6.png"
import p17 from "../src/img/projPic/p1.7.png"
import p21 from "../src/img/projPic/p2.1.png"
import p22 from "../src/img/projPic/p2.2.png"
import p23 from "../src/img/projPic/p2.3.png"
import p31 from "../src/img/projPic/p3.1.png"
import p32 from "../src/img/projPic/p3.2.png"
import p33 from "../src/img/projPic/p3.3.png"
import p34 from "../src/img/projPic/p3.4.png"
import p35 from "../src/img/projPic/p3.5.png"
import p36 from "../src/img/projPic/p3.6.png"
import p37 from "../src/img/projPic/p3.7.png"
import p41 from "../src/img/projPic/p4.1.png"
import p42 from "../src/img/projPic/p4.2.png"
function Projects() {
    const props = useSpring({
        from: { opacity: 0, marginTop: -1000 },
        to: { opacity: 1, marginTop: 30 },
        config: { delay: 1000, duration: 2000 }
    })
    const text = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 3000, duration: 6000 }
    })
    const content = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { delay: 3000, duration: 5000 }
    })
    return (
        <>
            <Nav />
            {/* CARD1 */}
            <animated.div style={props} className="projectsContainer">
                <div className="projTitleCard">
                    <animated.div style={text} className="ProjectTitle"><span>Project: </span>LMS "Learning Management System"</animated.div>
                    {/* <div className="ProjectTools"><span>Tools: </span> React.js</div> */}
                </div>
                <animated.div style={content} className="row center">

                    <div className="card">
                        <a href="http://iqstore.ivyarc.com/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p11} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="http://iqstore.ivyarc.com/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p12} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="http://iqstore.ivyarc.com/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p13} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="http://iqstore.ivyarc.com/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p14} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="http://iqstore.ivyarc.com/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p15} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="http://iqstore.ivyarc.com/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p16} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="http://iqstore.ivyarc.com/">
                            <img className="medium" src={p17} alt="product img" />
                        </a>
                    </div>
                </animated.div >
                {/* CARD2 */}
                <div className="projTitleCard">
                    <animated.div style={text} className="ProjectTitle"><span>Project: </span>"C.R.U.D" List of Federal Ministries in Nigeria</animated.div>
                    {/* <div className="ProjectTools"><span>Tools: </span> React.js</div> */}
                </div>
                <animated.div style={content} className="row center">

                    <div className="card">
                        <a href="https://laughing-bose-fd441e.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p21} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://laughing-bose-fd441e.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p22} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://laughing-bose-fd441e.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p23} alt="product img" />
                        </a>
                    </div>
                    {/* <div className="card">
                        <a href="https://laughing-bose-fd441e.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p22} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://laughing-bose-fd441e.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p22} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://laughing-bose-fd441e.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p22} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://laughing-bose-fd441e.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p22} alt="product img" />
                        </a>
                    </div> */}
                </animated.div >
                {/* CARD3 */}
                <div className="projTitleCard">
                    <animated.div style={text} className="ProjectTitle"><span>Project: </span>Data Visualization Platform</animated.div>
                    {/* <div className="ProjectTools"><span>Tools: </span> React.js</div> */}
                </div>
                <animated.div style={content} className="row center">

                    <div className="card">
                        <a href="https://kind-agnesi-86dcc5.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p31} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://kind-agnesi-86dcc5.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p32} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://kind-agnesi-86dcc5.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p33} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://kind-agnesi-86dcc5.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p34} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://kind-agnesi-86dcc5.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p35} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://kind-agnesi-86dcc5.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p36} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://kind-agnesi-86dcc5.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p37} alt="product img" />
                        </a>
                    </div>
                </animated.div >
                {/* CARD4 */}
                <div className="projTitleCard">
                    <animated.div style={text} className="ProjectTitle"><span>Project: </span>Random User Profile Generator</animated.div>
                    {/* <div className="ProjectTools"><span>Tools: </span> React.js</div> */}
                </div>
                <animated.div style={content} className="row center">

                    <div className="card">
                        <a href="https://brave-beaver-b75543.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p41} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://brave-beaver-b75543.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p42} alt="product img" />
                        </a>
                    </div>
                    {/* <div className="card">
                        <a href="https://brave-beaver-b75543.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p11} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://brave-beaver-b75543.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p11} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://brave-beaver-b75543.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p11} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://brave-beaver-b75543.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p11} alt="product img" />
                        </a>
                    </div>
                    <div className="card">
                        <a href="https://brave-beaver-b75543.netlify.app/" target="_blank" rel="noopener noreferrer">
                            <img className="medium" src={p11} alt="product img" />
                        </a>
                    </div> */}
                </animated.div >
            </animated.div>
        </>
    )
}

export default Projects
