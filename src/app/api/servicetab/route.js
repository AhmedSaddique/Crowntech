import { servicetabGET } from "./CRUD/servicetabGET";
import { servicetabPOST } from "./CRUD/servicetabPOST";


export const POST = async (req) =>{
    return servicetabPOST(req);
}

export const GET = async (req) =>{
    return servicetabGET(req);
}