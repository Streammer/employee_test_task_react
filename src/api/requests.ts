import axios from "axios"

export const getRequest = (url:string) => {
    return (axios.get(url))
}
export const patchRequest = (url:string, params:any) => {
    return axios.patch(url, params)
}

export const postRequest = (url:string, params:any) => {
    return (axios.patch(url, params))
}