import { userDELETE } from "../CRUD/UserDELETE";
import { UserGetbyID } from "../CRUD/UserGET"
import { userPUT } from "../CRUD/UserPUT";



export const GET = (req, {params}) =>{
    return UserGetbyID(req, {params});
}

export const DELETE = (req, {params}) =>{
    return userDELETE(req, {params});
}

export const PUT = (req, {params}) =>{
    return userPUT(req, {params});
}