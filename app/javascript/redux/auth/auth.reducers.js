import AUTH_TYPES from "./auth.types"

const INITIAL_STATE = {
    auth: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_TYPES.AUTH_SUCCESS:
            return {
                ...state,
                auth: action.payload
            }
        case AUTH_TYPES.AUTH_FAILURE:
        case AUTH_TYPES.LOGOUT:
            return {
                ...state,
                auth: null
            }
        default:
            return state
    }
}