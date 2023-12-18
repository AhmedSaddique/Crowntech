
import { servicefaqGET } from "./CRUD/servicefaqGET";
import { servicefaqPOST } from "./CRUD/servicefaqPOST";



export const POST = async (req) =>{
    return servicefaqPOST(req);
}

export const GET = async (req) =>{
    return servicefaqGET(req);
}