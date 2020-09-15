import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import HomePage from "../pages/home-page/home-page.component";
import Header from "./header/header.component";
import SignUp from "./sign-up/sign-up.component";
import SignIn from "./sign-in/sign-in.component";
import PrivateRoute from "./routing/private-route.component";

const App = () => {
    return (
        <Fragment>

            <Router>
                <Header></Header>
                <Switch>
                    <PrivateRoute exact path="/" component={HomePage}></PrivateRoute>
                    <Route exact path="/sign_up" component={SignUp}></Route>
                    <Route exact path="/sign_in" component={SignIn}></Route>
                </Switch>
            </Router>
        </Fragment>
    )
}

export default App