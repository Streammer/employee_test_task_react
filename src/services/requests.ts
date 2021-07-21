import axios from 'axios'
import {userTypes} from '../interfaces/userTypes'

export const getRequest = async (): Promise<userTypes[]> => {
    try {
        const res = await axios.get(`${process.env.REACT_APP_APIHOST}employees`)
        return res.data
    } catch (error) {
        return error
    }
}
export const patchRequest = async (id: number, status: string) => {
    try {
        return await axios.patch(`${process.env.REACT_APP_APIHOST}employees/${id}`, {id, status})
    } catch (error) {
        console.log(error)
    }
}

export const postRequest = (url: string, params: any) => {
    return axios.post(url, params)
}
