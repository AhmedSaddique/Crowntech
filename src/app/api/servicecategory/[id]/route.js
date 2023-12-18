import { servicecategoryGetbyID } from "../CRUD/ServicecategoryGET";
import { servicecategoryPUT } from "../CRUD/ServicecategoryPUT";
import { servicecategoryDELETE } from "../CRUD/servicecategoryDELETE";




export const GET = (req, {params}) =>{
    return servicecategoryGetbyID(req, {params});
}

export const DELETE = (req, {params}) =>{
    return servicecategoryDELETE(req, {params});
}

export const PUT = (req, {params}) =>{
    return servicecategoryPUT(req, {params});
}