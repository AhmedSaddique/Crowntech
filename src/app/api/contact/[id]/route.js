import { contactDELETE } from "../CRUD/contactDELETE";
import { contactGetbyID } from "../CRUD/contactGET";
import { contactPUT } from "../CRUD/contactPUT";



export const GET = (req, {params}) =>{
    return contactGetbyID(req, {params});
}

export const DELETE = (req, {params}) =>{
    return contactDELETE(req, {params});
}

export const PUT = (req, {params}) =>{
    return contactPUT(req, {params});
}