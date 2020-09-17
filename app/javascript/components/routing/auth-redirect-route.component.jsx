import {Route, Redirect} from "react-router-dom"
import React from "react"
import {connect} from "react-redux";

const AuthRedirectRoute = ({component: Component, auth, ...otherProps}) => {
    return (
        <Route
            {...otherProps}
            render={props => {
                if (auth)
                    return <Redirect to="/"></Redirect>
                else
                    return <Component {...props}></Component>
            }}
        />
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth.auth
})

export default connect(mapStateToProps)(AuthRedirectRoute)