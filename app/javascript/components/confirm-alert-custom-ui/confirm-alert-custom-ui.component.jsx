import React from "react"


const ConfirmAlertCustomUI = ({onClose,title,description,yesBtnText,handleYesBtnClick}) => {
    return (
        <div className='shadow bg-white p-4 pb-1'>
            <div className="my-3 text-center sm:mt-0 sm:ml-4 sm:text-left divide-y">
                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                    {title}
                </h3>
                <div className="mt-1">
                    <p className="text-sm text-gray-700 mt-2">
                        {description}
                    </p>
                </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button"
                        onClick={() => {
                            handleYesBtnClick();
                            onClose();
                        }}
                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-bold text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                    {yesBtnText}
                </button>
                <button type="button" onClick={onClose}
                        className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Cancel
                </button>
            </div>
        </div>
    )
}

ConfirmAlertCustomUI.defaultProps = {
    title: "Confirm Action",
    yesBtnText: "Delete"
}

export default ConfirmAlertCustomUI
