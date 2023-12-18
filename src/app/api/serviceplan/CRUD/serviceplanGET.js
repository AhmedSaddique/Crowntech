import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const serviceplanGET = async (req) => {
    try {
        const serviceplan = await prisma.serviceplan.findMany({
            include :{
                feature: true,
            }
        });

        return new NextResponse(JSON.stringify({
            success: "Data fetched successfully", serviceplan },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not fetched", error },
            {status :"400"}
            
            ))
    }
};

export const serviceplanGetbyID = async (req, {params}) =>{


    try {
        const id = params.id;
        const serviceplan = await prisma.serviceplan.findUnique({
            where: {
                id : parseInt(id, 10),
            },
            include:{
                feature: true,
            }
        });
        if(!serviceplan){
            return new NextResponse(JSON.stringify({
                error: "Data not found", error },
                {status :"400"}
                
                ))
        }
        return new NextResponse(JSON.stringify({
            success: "Data fetched successfully", serviceplan },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not fetched", error },
            {status :"400"}
            
            ))
        
    }
}