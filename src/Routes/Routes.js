import React from 'react'
import { Switch, Route } from 'react-router-dom';
import WelcomePage from '../Pages/WelcomePage/WelcomePage';
import Projects from "../Pages/Projects/Projects"
import AboutMe from "../Pages/AboutMe/AboutMe"
import Contact from '../Pages/ContactMe/Contact';
function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <WelcomePage />
            </Route>
            <Route exact path="/Aboutme">
                <AboutMe />
            </Route>
            <Route exact path="/projects">
                <Projects />
            </Route>
            <Route exact path="/contact">
                <Contact />
            </Route>
        </Switch>
    )
}

export default Routes
