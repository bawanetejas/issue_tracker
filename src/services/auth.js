import toast from "react-hot-toast";
import { apiConnector } from "../api/api-connector"
import { authEndpoints } from "../api/endpoints"


export const login = async (data) => {
    try {
        const result = await apiConnector("POST", authEndpoints.LOGIN_API, data);
        return result.data

    } catch (error) {

        toast.error(error?.response?.data?.message)
    }
}

export const signup = async (data) => {
    try {
        const result = await apiConnector("POST", authEndpoints.SIGNUP_API, data);
        return result.data;
    } catch (error) {

        toast.error(error?.response?.data?.message)
    }
}

