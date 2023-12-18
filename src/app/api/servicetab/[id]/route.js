import { servicetabDELETE } from "../CRUD/servicetabDELETE";
import { servicetabGetbyID } from "../CRUD/servicetabGET"
import { servicetabPUT } from "../CRUD/servicetabPUT";



export const GET = (req, {params}) =>{
    return servicetabGetbyID(req, {params});
}

export const DELETE = (req, {params}) =>{
    return servicetabDELETE(req, {params});
}

export const PUT = (req, {params}) =>{
    return servicetabPUT(req, {params});
}