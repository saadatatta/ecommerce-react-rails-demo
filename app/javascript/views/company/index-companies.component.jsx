import React, {useEffect, useState} from "react"
import {setAuthTokenHeaders} from "../../utils/axios";
import axios from "axios"
import {reactToastError} from "../../utils/toast";
import IndexCompanyCard from "./index-company-card.component";
import {v4 as uuidv4} from "uuid";

const IndexCompanies = () => {
    const [companies, setCompanies] = useState([])

    useEffect(() => {
        async function fetchCompaniesAsync() {
            try {
                setAuthTokenHeaders()
                const result = await axios.get("/api/v1/companies.json")
                const companies = result.data
                if (companies && companies.length > 0) {
                    setCompanies(companies)
                }
            } catch (e) {
                e.response.data.errors.forEach(error => reactToastError(error))
            }
        }

        fetchCompaniesAsync()
    }, [])

    return (
        <>
            <div>Index Companies</div>
            {
                companies.length === 0 ?
                    <div> No Companies found </div> :
                    <div className="flex m-8">
                        {
                            companies.map((company) => {
                                return (
                                    <IndexCompanyCard company={company} key={uuidv4()}/>
                                )
                            })
                        }
                    </div>
            }
        </>
    )
}

export default IndexCompanies