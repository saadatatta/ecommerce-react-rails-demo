import React, {useState, useEffect} from "react"
import {useFormik} from "formik";
import {setAuthTokenHeaders} from "../../utils/axios";
import axios from "axios"
import FileUploadPreview from "../../components/file-upload-preview/file-upload-preview.component";
import {reactToastError} from "../../utils/toast";
import FormErrors from "../../components/form-errors/form-errors.component";
import {pick, forEach} from "lodash";

const EditCompany = ({history, match}) => {
    const {params: {slug}} = match
    const [formErrors, setFormErrors] = useState(null)

    const formik = useFormik({
        initialValues: {
            name: '',
            url: '',
            logo: null
        },
        onSubmit: async values => {
            const formData = new FormData()
            Object.keys(values).forEach((key) => {
                formData.append(key.toString(), values[key])
            })
            setAuthTokenHeaders()
            try {
                const res = await axios.put(`/api/v1/companies/${slug}.json`, formData)
                if (res.status === 200) {
                    history.push("/companies")
                } else {
                    reactToastError("Something went wrong.Please try again")
                }
            } catch (e) {
                setFormErrors(e.response.data.errors)
                // Scroll To Top of browser to show form errors
                window.scrollTo(0, 0)
            }
        }
    });

    useEffect(() => {
        async function fetchCompanyAsync() {
            try {
                setAuthTokenHeaders()
                const result = await axios.get(`/api/v1/companies/${slug}.json`)
                const company = result.data
                if (company) {
                    const filterFields = pick(company, ['name', 'url'])
                    forEach(filterFields, (value, key) => {
                        formik.setFieldValue(key, value)
                    })
                }
            } catch (e) {
                e.response.data.errors.forEach(error => reactToastError(error))
            }
        }

        fetchCompanyAsync()
    }, [])

    const handleLogoFieldChange = (event) => {
        formik.setFieldValue("logo", event.currentTarget.files[0])
    }

    return (
        <div className="mx-8 my-8">
            <form onSubmit={formik.handleSubmit} className="w-full max-w-lg mx-auto">
                <h2 className="my-8 text-blue-700 font-bold text-center text-2xl">Edit Company</h2>
                <FormErrors errors={formErrors}/>

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

                <div className="flex flex-wrap -mx-3">
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

                <div className="flex items-center mb-6">
                    <FileUploadPreview file={formik.values.logo}/>
                </div>

                <div className="flex items-center justify-between">
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit">
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditCompany