import axios from "axios"

export const setAuthTokenHeaders = () => {
    const auth = JSON.parse(sessionStorage.user)
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    if (auth) {
        Object.keys(auth).forEach((key) => {
            axios.defaults.headers.common[key] = auth[key]
        })
    } else {
        delete axios.defaults.headers.common
    }
}