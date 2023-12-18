import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicefaqPUT = async (req, {params}) => {
    try {
        const id = params.id;
        const check = await prisma.servicefaq.findUnique({
            where: {
                id : parseInt(id, 10),
            }
        });
        if(!check){
            return new NextResponse(JSON.stringify({
                error: "Data not found", error },
                {status :"400"}
                ))
        }
        const jsonData = await req.json();
        const updatedservicefaq = await prisma.servicefaq.update({
            where: {
                id : parseInt(id, 10)},
                 data: jsonData
        })
        return new NextResponse(JSON.stringify({
            success: "Data updated successfully", updatedservicefaq },
            {status :"200"}
            
            ))

    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not updated", error },
            {status :"400"}
            
            ))
        
    }
}