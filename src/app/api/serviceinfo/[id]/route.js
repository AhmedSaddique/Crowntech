import { serviceinfoDELETE } from "../CRUD/serviceinfoDELETE";
import { serviceinfoGetbyID } from "../CRUD/serviceinfoGET"
import { serviceinfoPUT } from "../CRUD/serviceinfoPUT";



export const GET = (req, {params}) =>{
    return serviceinfoGetbyID(req, {params});
}

export const DELETE = (req, {params}) =>{
    return serviceinfoDELETE(req, {params});
}

export const PUT = (req, {params,body }) =>{
    return serviceinfoPUT(req, {params});
}