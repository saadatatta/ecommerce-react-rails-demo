import React, {useEffect, useState} from "react"
import {setAuthTokenHeaders} from "../../utils/axios";
import axios from "axios"
import {reactToastError} from "../../utils/toast";
import IndexCompanyCardContainer from "./index-company-card.container";

const IndexCompanies = () => {
    const [companies, setCompanies] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(() => {
        async function fetchCompaniesAsync() {
            try {
                setAuthTokenHeaders()
                const result = await axios.get("/api/v1/companies.json")
                const companies = result.data
                if (companies && companies.length > 0) {
                    setCompanies(companies)
                }
                await setLoading(false)
            } catch (e) {
                e.response.data.errors.forEach(error => reactToastError(error))
                setLoading(false)
            }
        }

        fetchCompaniesAsync()
    }, [])

    return (
        <>
            <h1 className="text-center font-bold text-xl mt-5">Companies</h1>
            <IndexCompanyCardContainer companies={companies} loading={loading}/>
        </>
    )
}

export default  IndexCompanies