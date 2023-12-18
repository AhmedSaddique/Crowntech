import { contactGET } from "./CRUD/contactGET";
import { contactPOST } from "./CRUD/contactPOST";



export const POST = async (req) =>{
    return contactPOST(req);
}

export const GET = async (req) =>{
    return contactGET(req);
}