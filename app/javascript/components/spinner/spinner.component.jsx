import React from "react"
import Loader from 'react-loader-spinner'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "./spinner.styles.scss"

const Spinner = () => {
    return (
        <div className="spinner-overlay">
            <Loader
                type="TailSpin"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    );
}

export default Spinner

