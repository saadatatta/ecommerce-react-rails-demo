import React from "react"
import {useFormik} from "formik"
import {connect} from "react-redux"
import {authFailure, authSuccess} from "../../redux/auth/auth.actions";
import {setAuth} from "../../redux/auth/auth.utils";

const SignUp = ({setAuthSuccess, setAuthFailure, history}) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            password_confirmation: ''
        },
        onSubmit: async (values) => {
            const res = await setAuth("/api/v1/auth.json",values)
            if(res){
                setAuthSuccess(res)
                history.push("/")
            }
            else {
                setAuthFailure()
            }
        }
    });
    return (
        <div className="w-full max-w-xs mx-auto my-32">
            <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="mb-4 text-blue-700 font-bold text-center">REGISTER USER</h2>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                        Email Address
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" name="email" type="email" placeholder="Email" required onChange={formik.handleChange}
                        value={formik.values.email}/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password" name="password" type="password" placeholder="Password" required
                        onChange={formik.handleChange} value={formik.values.password}/>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password_confirmation">
                        Password Confirmation
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password_confirmation" name="password_confirmation" type="password" required
                        placeholder="Re-enter password" onChange={formik.handleChange}
                        value={formik.values.password_confirmation}/>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Sign up
                    </button>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                       href="#">
                        Forgot Password?
                    </a>
                </div>
            </form>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => ({
    setAuthSuccess: (data) => dispatch(authSuccess(data)),
    setAuthFailure: () => dispatch(authFailure())
})

export default connect(null,mapDispatchToProps)(SignUp)
