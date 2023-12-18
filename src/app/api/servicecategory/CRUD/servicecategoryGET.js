import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const servicecategoryGET = async (req) => {
    try {
        const servicecategory = await prisma.servicecategory.findMany();
        return new NextResponse(JSON.stringify({
            success: "Users fetched successfully", servicecategory },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Users not fetched", error },
            {status :"400"}
            
            ))
    }
};

export const servicecategoryGetbyID = async (req, {params}) =>{


    try {
        const id = params.id;
        const servicecategory = await prisma.servicecategory.findUnique({
            where: {
                id : parseInt(id, 10),
            }
        });
        if(!servicecategory){
            return new NextResponse(JSON.stringify({
                error: "User not found", error },
                {status :"400"}
                
                ))
        }
        return new NextResponse(JSON.stringify({
            success: "User fetched successfully", servicecategory },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not fetched", error },
            {status :"400"}
            
            ))
        
    }
}