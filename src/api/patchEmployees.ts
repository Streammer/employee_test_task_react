import {patchRequest} from "./requests";
import {BASE} from "../urlsList";

export const patchEmployees = async (id:number, status:string) => {
    const res = await patchRequest(`${BASE}employees/${id}`, {id, status})
    return res
}