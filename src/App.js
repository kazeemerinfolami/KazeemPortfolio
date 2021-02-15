import React from "react"
// import Home from "./Home"
import Nav from './components/Nav';
import DateTime from "./CurrentTimendDate";
import profileImg from "../src/img/IMG_4234.jpg"


function App() {
  return (
    <>
      <Nav />
      <DateTime />
      <div className="homeContainer">
        <div className="profImgContainer">
          <img className="profImg" src={profileImg} />
      </div>
        <div>
          <div>
            <span className="logoName">Hi, i'm</span> <span className="name">Kazeem Bolaji Erinfolami </span>
          </div>
          <div>
            <span className="jobTitle">Software Developer</span><span className="smileEmoji">🖥️</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
