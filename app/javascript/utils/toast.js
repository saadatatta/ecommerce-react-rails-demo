import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const reactToastError = (error, position = "top-right", autoClose = 5000) => {
    return toast.error(error, {
        position: position,
        autoClose: autoClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
