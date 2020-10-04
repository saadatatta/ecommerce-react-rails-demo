import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import {Provider} from "react-redux"
import store from "../redux/store"
import {BrowserRouter as Router} from "react-router-dom";
import { ToastContainer } from 'react-toastify';

document.addEventListener('DOMContentLoaded', () => {
    ReactDOM.render(
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
            <ToastContainer/>
        </Provider>
        ,
        document.body.appendChild(document.createElement('div')),
    )
})
