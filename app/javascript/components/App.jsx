import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomePage from "../pages/home-page/home-page.component";
import Header from "./header/header.component";
import SignUp from "./sign-up/sign-up.component";

const App = () => {
    return (
        <Fragment>

            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/" component={HomePage}></Route>
                    <Route exact path="/sign_up" component={SignUp}></Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App