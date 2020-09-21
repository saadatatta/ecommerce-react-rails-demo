import React, {Fragment, useEffect, Suspense, lazy} from 'react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import axios from "axios"
import {connect} from "react-redux"
import Header from "./header/header.component";
import PrivateRoute from "./routing/private-route.component";
import {setAuthTokenHeaders} from "../utils/axios";
import {authFailure, authSuccess} from "../redux/auth/auth.actions";
import {constructAuthObject} from "../redux/auth/auth.utils";
import AuthRedirectRoute from "./routing/auth-redirect-route.component";
import Spinner from "./spinner/spinner.component";

const SignUp = lazy(()=> import("./sign-up/sign-up.component"))
const SignIn = lazy(()=> import("./sign-in/sign-in.component"))
const HomePage = lazy(()=> import("../pages/home-page/home-page.component"))


const App = ({setAuthSuccess, setAuthFailure, auth}) => {
    useEffect(() => {
        loginStatus()
    }, [])

    // Check for login status on app start so that session can be created
    const loginStatus = async () => {
        try {
            setAuthTokenHeaders()
            const res = await axios.get('/api/v1/users/logged_in.json')
            if (res.status === 200) {
                setAuthSuccess(constructAuthObject(res))
            }
        } catch (e) {
            setAuthFailure()
            console.log(e.message)
        }
    }

    return (
        <Fragment>
            <Router>
                <Header/>
                <Switch>
                    <Suspense fallback={<Spinner/>}>
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <AuthRedirectRoute exact path="/sign_up" component={SignUp}/>
                        <AuthRedirectRoute exact path="/sign_in" component={SignIn}/>
                    </Suspense>
                </Switch>

            </Router>
        </Fragment>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth.auth
})

const mapDispatchToProps = (dispatch) => ({
    setAuthSuccess: (data) => dispatch(authSuccess(data)),
    setAuthFailure: () => dispatch(authFailure())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)