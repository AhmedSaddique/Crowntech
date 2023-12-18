import { servicefaqDELETE } from "../CRUD/servicefaqDELETE";
import { servicefaqGetbyID } from "../CRUD/servicefaqGET"
import { servicefaqPUT } from "../CRUD/servicefaqPUT";



export const GET = (req, {params}) =>{
    return servicefaqGetbyID(req, {params});
}

export const DELETE = (req, {params}) =>{
    return servicefaqDELETE(req, {params});
}

export const PUT = (req, {params}) =>{
    return servicefaqPUT(req, {params});
}