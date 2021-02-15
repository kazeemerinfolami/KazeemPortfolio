import React from 'react'
import Nav from './components/Nav'

function About() {
    return (
        <div>
            <Nav />
            <div className="aboutMeContainer">
                <div className="aboutMeTitle"><span className="about">About</span> Me_</div>
                <div className="aboutMe">
                    I am Junior Web developer able to build a Web presence from the ground up - from concept,
                    navigation, layout and programming to UX and SEO. Skilled at writing well-designed, testable
                    and efficient code using current best practices in Web development. Fast learner,
                    hard worker and team player who is proficient in an array of scripting languages and multimedia Web tools
                    </div>
                <div className="aboutMeTitle2">Languages & Tools_</div>
                <div className="aboutMe">
                    <span className="aboutTools">HTML</span> <span>|</span>
                    <span className="aboutTools">CSS</span> <span>|</span>
                    <span className="aboutTools">JavaScript</span> <span>|</span>
                    <span className="aboutTools">React.js</span> <span>|</span>
                    <span className="aboutTools">Redux</span> <span>|</span>
                    <span className="aboutTools">GraphQL</span>
                </div>
            </div>
        </div>
    )
}

export default About
