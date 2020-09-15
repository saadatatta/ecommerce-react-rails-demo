import AUTH_TYPES from "./auth.types";

export const authSuccess = (auth) => ({
    type: AUTH_TYPES.AUTH_SUCCESS,
    payload: auth
})

export const authFailure = () => ({
    type: AUTH_TYPES.AUTH_FAILURE
})

export const logOut = () => ({
    type: AUTH_TYPES.LOGOUT
})