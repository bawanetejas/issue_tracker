import toast from "react-hot-toast"
import { apiConnector } from "../api/api-connector"
import { teamEndpoints } from "../api/endpoints"

export const getAllTeam = async () => {
    const result = await apiConnector("GET", teamEndpoints.TEAM_API);
    return result.data;
}

export const createTeam = async (data) => {
    const result = await apiConnector("POST",
        teamEndpoints.TEAM_API,
        data)
    return result.data
}