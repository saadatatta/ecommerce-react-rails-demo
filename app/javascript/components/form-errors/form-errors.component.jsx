import React from "react"
import { v4 as uuidv4 } from 'uuid';
import "./form-errors.styles"

const FormErrors = ({errors}) => {
    if (!errors) return null
    return (
        <div className="form-errors-container border-l-4 p-4 mb-6" role="alert">
            <p className="font-bold">Following errors need to be fixed</p>
                <ul className="form-errors-list">
                    {
                        errors.map((e)=> <li key={uuidv4()}>{e}</li>)
                    }
                </ul>
        </div>
    )
}

export default FormErrors