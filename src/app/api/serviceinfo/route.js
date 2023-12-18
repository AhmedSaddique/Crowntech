
import { serviceinfoGET } from "./CRUD/serviceinfoGET";
import { serviceinfoPOST } from "./CRUD/serviceinfoPOST";



export const POST = async (req) =>{
    return serviceinfoPOST(req);
}

export const GET = async (req) =>{
    return serviceinfoGET(req);
}