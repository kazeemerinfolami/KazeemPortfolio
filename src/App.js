import React from "react"
import { useSpring, animated } from 'react-spring'
import Nav from './components/Nav';
import CV from './components/CV';
import DateTime from "./CurrentTimendDate";
import profileImg from "../src/img/IMG_4234.jpg"


function App() {
  const props = useSpring({
    from: { opacity: 0, marginTop: -500 },
    to: { opacity: 1, marginTop: 150 },
    config: { delay: 1000, duration: 2000 }
  })
  const text = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { delay: 1000, duration: 5000 }
  })
  return (
    <>
      <Nav />
      <DateTime />
      <CV />
      <animated.div style={props} className="homeContainer">
        < div className="profImgContainer">
          <img className="profImg" src={profileImg} />
        </div>
        <animated.div style={text}>
          <div>
            <span className="devIntro">Looking for a Developer! 👨🏽‍💻</span>
          </div>
          <div className="name1">
            < span className="logoName">Howdy, i'm</span> <span className="name">Kazeem Erinfolami </span>
          </div>
          <div className="name2">
            <span className="jobTitle">i'm a freelance Web Designer & Developer</span><span className="smileEmoji">🖥️</span>
          </div>
        </animated.div>
      </animated.div>
    </>
  );
}

export default App;
