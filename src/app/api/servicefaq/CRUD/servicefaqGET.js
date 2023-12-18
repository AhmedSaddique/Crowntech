import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const servicefaqGET = async (req) => {
    try {
        const servicefaq = await prisma.servicefaq.findMany();
        return new NextResponse(JSON.stringify({
            success: "Data fetched successfully", servicefaq },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not fetched", error },
            {status :"400"}
            
            ))
    }
};

export const servicefaqGetbyID = async (req, {params}) =>{


    try {
        const id = params.id;
        const servicefaq = await prisma.servicefaq.findUnique({
            where: {
                id : parseInt(id, 10),
            }
        });
        if(!servicefaq){
            return new NextResponse(JSON.stringify({
                error: "Data not found", error },
                {status :"400"}
                
                ))
        }
        return new NextResponse(JSON.stringify({
            success: "Data fetched successfully", servicefaq },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not fetched", error },
            {status :"400"}
            
            ))
        
    }
}