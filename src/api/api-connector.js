import axios from "axios";

const axiosInstance = axios.create({});

const apiConnector = (method, url, data, params, headers) => {
    return axiosInstance({
        method: `${method}`,
        url: `${url}`,
        data: data ? data : '',
        params: params ? params : '',
        headers: headers ? headers : ''
    })
}

export default apiConnector;