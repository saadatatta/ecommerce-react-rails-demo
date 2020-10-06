import React from "react";
import "./index-company-card.styles.scss"
import {Link} from "react-router-dom";

const IndexCompanyCard = ({company:{name,logo_url,url}}) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4" >
            <img className="w-full index-company-card-logo" src= {logo_url} alt={name}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base"> {url} </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {/*TODO:// Design company show page*/}
                <Link
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Show</Link>
                <Link
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Edit</Link>
                {/*TODO:// Handle company delete*/}
                <span
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Delete</span>
            </div>
        </div>
     )
}
export default IndexCompanyCard