import React from "react"
import IndexCompanyCard from "./index-company-card.component";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {v4 as uuidv4} from "uuid";

const IndexCompanyCardContainer = ({companies}) => {
    return (
        <>
            {
                companies.length === 0 ?
                    <div className="text-center font-regular text-xl m-auto mt-5"> No Companies found </div> :
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

export default WithSpinner(IndexCompanyCardContainer)

