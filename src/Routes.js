import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "./App"
import About from "./About"
import Contact from "./Contact"
import Project from "./Projects"



function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/about" component={About} />
                <Route path="/project" component={Project} />
                <Route path="/contact" component={Contact} />
            </Switch>

        </BrowserRouter>
    )
}

export default Routes
