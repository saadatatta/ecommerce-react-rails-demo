import React from "react"
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import ConfirmAlertCustomUI from "../components/confirm-alert-custom-ui/confirm-alert-custom-ui.component";

export const confirmModal = ({title,description,yesBtnText, handleYesBtnClick}={}) => {
    confirmAlert({
        customUI: ({ onClose }) => {
            return (
                <ConfirmAlertCustomUI onClose={onClose} title={title} description={description} yesBtnText={yesBtnText} handleYesBtnClick={handleYesBtnClick} />
            );
        }
    });
}