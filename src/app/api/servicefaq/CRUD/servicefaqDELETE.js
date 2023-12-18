import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicefaqDELETE = async (req, {params}) => {
    try {
        const id = params.id;
        const servicefaq = await prisma.servicefaq.delete({
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
            success: "Data deleted successfully", servicefaq },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not deleted", error },
            {status :"400"}
            
            ))
        
    }
}
