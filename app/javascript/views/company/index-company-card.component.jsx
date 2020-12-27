import React,{useRef} from "react";
import "./index-company-card.styles.scss"
import {Link, withRouter} from "react-router-dom";
import {confirmModal} from "../../utils/confirm-modal";
import {setAuthTokenHeaders} from "../../utils/axios";
import axios from "axios"
import {reactToastError, reactToastSuccess} from "../../utils/toast";

const IndexCompanyCard = (props) => {
    const {company: {name, slug, logo_url, url}} = props
    const {match: {path}} = props;
    const cardDOMReference = useRef(null)

    const handleCompanyDelete = (e) => {
        e.preventDefault();
        confirmModal({
            title: "Delete Company",
            description: "Are you sure you want to delete this company?",
            handleYesBtnClick: deleteCompanyRequest
        })
    }

    const deleteCompanyRequest = async () => {
        try {
            setAuthTokenHeaders()
            const {data, status} = await axios.delete(`/api/v1/companies/${slug}`)
            if (status === 200) {
                reactToastSuccess(data.message)
                cardDOMReference.current.remove()
            }
        } catch (e) {
            e.response.data.errors.forEach(error => reactToastError(error))
        }
    }

    return (
        <div ref={cardDOMReference} className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full index-company-card-logo" src={logo_url} alt={name}/>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{name}</div>
                <p className="text-gray-700 text-base"> {url} </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                {/*TODO:// Design company show page*/}
                <a
                    className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Show</a>
                <Link to={`${path}/${slug}/edit`}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Edit</Link>

                <a onClick={handleCompanyDelete}
                   className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 cursor-pointer">Delete</a>
            </div>
        </div>
    )
}
export default withRouter(IndexCompanyCard)