import axios from "axios";

export const setAuth = async (url, values) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    try {
        const formData = JSON.stringify(values, null, 2)
        const res = await axios.post(url, formData, config)
        const obj = {
            'access-token': res.headers['access-token'],
            'client': res.headers.client,
            'uid': res.data.data.uid
        }
        localStorage.setItem('user', JSON.stringify(obj))
        return obj
    } catch (e) {
        console.log(e)
        return null
    }
}

export const constructAuthObject = (res) => {
    return {
        'access-token': res.headers['access-token'],
        'client': res.headers.client,
        'uid': res.headers.uid
    }
}