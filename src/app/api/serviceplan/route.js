import { serviceplanGET } from "./CRUD/serviceplanGET";
import { serviceplanPOST } from "./CRUD/serviceplanPOST";



export const POST = async (req) =>{
    return serviceplanPOST(req);
}

export const GET = async (req) =>{
    return serviceplanGET(req);
}