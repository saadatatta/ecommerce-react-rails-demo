import React, {Fragment} from "react"
import {Link} from "react-router-dom"
import {logOut} from "../../redux/auth/auth.actions";
import axios from "axios"
import {connect} from "react-redux";
import {setAuthTokenHeaders} from "../../utils/axios";

const Header = ({auth, logOutUser}) => {

    const signOutUser = async () => {
        try {
            setAuthTokenHeaders()
            await axios.delete("/api/v1/auth/sign_out.json")
            localStorage.removeItem('user')
            logOutUser()
        } catch (e) {
            console.log(e.message)
        }
    }

    const authenticatedLinks = (
        <Fragment>
            <div onClick={signOutUser}
                 className="inline-block text-sm pr-4 mr-2 py-2 text-white lg:mt-0 cursor-pointer">SIGN
                OUT
            </div>
        </Fragment>
    )

    const unauthenticatedLinks = (
        <Fragment>
            <Link to="/sign_up"
                  className="inline-block text-sm pr-4 mr-2 py-2 text-white lg:mt-0">SIGN
                UP</Link>
            <Link to="/sign_in"
                  className="inline-block text-sm pr-4 mr-2 py-2 text-white lg:mt-0">SIGN
                IN</Link>
        </Fragment>
    )

    return (
        <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
                <span className="font-semibold text-xl tracking-tight">Ecommerce</span>
            </div>
            <div className="block lg:hidden">
                <button
                    className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <Link to="/companies"
                        className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                        Companies
                    </Link>
                </div>
                <div>
                    {
                        auth ? authenticatedLinks : unauthenticatedLinks
                    }
                </div>
            </div>
        </nav>
    )
}

const mapStateToProps = (state) => ({
    auth: state.auth.auth
})

const mapDispatchToProps = (dispatch) => ({
    logOutUser: () => dispatch(logOut())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)