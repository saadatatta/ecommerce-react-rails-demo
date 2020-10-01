import React, {Fragment, useEffect, useState} from 'react'
import {Route, Switch, Redirect} from "react-router-dom"
import axios from "axios"
import {connect} from "react-redux"
import Header from "./header/header.component";
import PrivateRoute from "./routing/private-route.component";
import {setAuthTokenHeaders} from "../utils/axios";
import {authFailure, authSuccess} from "../redux/auth/auth.actions";
import {constructAuthObject} from "../redux/auth/auth.utils";
import AuthRedirectRoute from "./routing/auth-redirect-route.component";
import Spinner from "./spinner/spinner.component";
import SignUp from "./sign-up/sign-up.component"
import SignIn from "./sign-in/sign-in.component";
import HomePage from "../pages/home-page/home-page.component";
import CompanyRoutes from "./company/company-routes.component";

const App = ({setAuthSuccess, setAuthFailure, auth}) => {

    const [isFetching, setIsFetching] = useState(true)

    useEffect(() => {
        loginStatus().then(() => {
            setIsFetching(false)
        })
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
            <Header/>
            {isFetching ?
                <Spinner/> :
                (
                    <Switch>
                        <PrivateRoute exact path="/" component={HomePage}/>
                        <PrivateRoute path="/companies" component={CompanyRoutes}/>
                        <AuthRedirectRoute exact path="/sign_up" component={SignUp}/>
                        <AuthRedirectRoute exact path="/sign_in" component={SignIn}/>
                    </Switch>
                )
            }
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