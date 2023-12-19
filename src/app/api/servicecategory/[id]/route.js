import { servicecategoryDELETE } from "../CRUD/servicecategoryDELETE";
import { servicecategoryGetbyID } from "../CRUD/servicecategoryGET";
import { servicecategoryPUT } from "../CRUD/servicecategoryPUT";




export const GET = (req, {params}) =>{
    return servicecategoryGetbyID(req, {params});
}

export const DELETE = (req, {params}) =>{
    return servicecategoryDELETE(req, {params});
}

export const PUT = (req, {params,body }) =>{
    return servicecategoryPUT(req, {params,body });
}