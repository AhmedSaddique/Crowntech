import { serviceplanDELETE } from "../CRUD/serviceplanDELETE";
import { serviceplanGetbyID } from "../CRUD/serviceplanGET"
import { serviceplanPUT } from "../CRUD/serviceplanPUT";



export const GET = (req, {params}) =>{
    return serviceplanGetbyID(req, {params});
}

export const DELETE = (req, {params}) =>{
    return serviceplanDELETE(req, {params});
}

export const PUT = (req, {params}) =>{
    return serviceplanPUT(req, {params});
}