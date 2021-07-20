import {getRequest} from "./requests";
import {BASE} from "../urlsList";
import {userTypes} from "../interfaces/userTypes";

export const getEmployees = async (): Promise<userTypes[]> => {
    const res = await getRequest(`${BASE}employees`)
    return res.data
}