import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomePage from "../pages/home-page/home-page.component";
import Header from "./header/header.component";

const App = () => {
    return (
        <Fragment>
            <Header></Header>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App