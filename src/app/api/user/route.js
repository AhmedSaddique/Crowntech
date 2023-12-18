import { userGET } from "./CRUD/UserGET";
import { userPOST } from "./CRUD/UserPOST";


export const POST = async (req) =>{
    return userPOST(req);
}

export const GET = async (req) =>{
    return userGET(req);
}