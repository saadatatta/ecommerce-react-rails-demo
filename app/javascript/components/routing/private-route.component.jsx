import {Route, Redirect} from "react-router-dom"
import React from "react"
import {connect} from "react-redux";

const PrivateRoute = ({component: Component,auth, ...otherProps}) => {
    return (
        <Route
            {...otherProps}
            render={props => {
                if (auth)
                    return <Component {...props}></Component>
                else
                    return <Redirect to="/sign_in"></Redirect>
            }}
        />
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth.auth
})

export default connect(mapStateToProps)(PrivateRoute)