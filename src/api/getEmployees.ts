import {getRequest} from "./requests";
import {BASE} from "../urlsList";

export const getEmployees = () => {
    return getRequest(`${BASE}employees`)
}