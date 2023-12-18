import { servicecategoryGET } from "./CRUD/servicecategoryGET";
import { servicecategoryPOST } from "./CRUD/servicecategoryPOST";



export const POST = async (req) =>{
    return servicecategoryPOST(req);
}

export const GET = async (req) =>{
    return servicecategoryGET(req);
}