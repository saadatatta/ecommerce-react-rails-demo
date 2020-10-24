import React from "react"
import {Switch, Route} from "react-router-dom"
import NewCompany from "./new-company.component";
import IndexCompanies from "./index-companies.component";
import EditCompany from "./edit-company.component";

const CompanyRoutes = (props) => {
    const {match: {path}} = props
    return (
        <Switch>
            <Route exact path={path} component={IndexCompanies} />
            <Route exact path={`${path}/new`} component={NewCompany}/>
            <Route exact path={`${path}/:slug/edit`} component={EditCompany}/>
        </Switch>
    )
}

export default CompanyRoutes
