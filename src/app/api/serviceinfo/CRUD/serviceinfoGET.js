import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const serviceinfoGET = async (req) => {
    try {
        const serviceinfo = await prisma.serviceinfo.findMany();
        return new NextResponse(JSON.stringify({
            success: "Data fetched successfully", serviceinfo },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not fetched", error },
            {status :"400"}
            
            ))
    }
};

export const serviceinfoGetbyID = async (req, {params}) =>{


    try {
        const id = params.id;
        const serviceinfo = await prisma.serviceinfo.findUnique({
            where: {
                id : parseInt(id, 10),
            }
        });
        if(!serviceinfo){
            return new NextResponse(JSON.stringify({
                error: "Data not found", error },
                {status :"400"}
                
                ))
        }
        return new NextResponse(JSON.stringify({
            success: "Data fetched successfully", serviceinfo },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not fetched", error },
            {status :"400"}
            
            ))
        
    }
}