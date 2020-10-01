import React from "react"
import {useFormik} from "formik";
import {setAuthTokenHeaders} from "../../utils/axios";
import axios from "axios"

const NewCompany = () => {

    const formik = useFormik({
        initialValues: {
            name: '',
            url: ''
        },
        onSubmit: async values => {
            const formData = new FormData()
            Object.keys(values).forEach((key)=>{
                console.log(key,values[key])
                formData.append(key.toString(), values[key])
            })
            console.log(formData)
            setAuthTokenHeaders()
            const res = await axios.post("/api/v1/companies.json", formData)
            console.log(res)
        }
    })

    const handleLogoFieldChange = (event) => {
        formik.setFieldValue("logo", event.currentTarget.files[0])
    }

    return (
        <div className="mx-8 my-8">
            <form onSubmit={formik.handleSubmit} className="w-full max-w-lg mx-auto">
                <h2 className="my-8 text-blue-700 font-bold text-center text-2xl">New Company</h2>
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="name">
                            Name
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="name" type="text" name="name" placeholder="Enter company name"
                            value={formik.values.name} onChange={formik.handleChange}/>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="url">
                            URL
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="url" type="text" name="url" placeholder="Website URL"
                            value={formik.values.url} onChange={formik.handleChange}/>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                               htmlFor="url">
                            Company Logo
                        </label>
                        <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="logo" type="file" name="logo"
                            onChange={handleLogoFieldChange}/>
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Create
                    </button>
                </div>
            </form>
        </div>
    )
}

export default NewCompany