import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceplanDELETE = async (req, {params}) => {
    try {
        const id = params.id;
        const serviceplan = await prisma.serviceplan.delete({
            where: {
                id : parseInt(id, 10),
            }
        });
        if(!serviceplan){
            return new NextResponse(JSON.stringify({
                error: "Data not found", error },
                {status :"400"}
                
                ))
        }
        return new NextResponse(JSON.stringify({
            success: "Data deleted successfully", serviceplan },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not deleted", error },
            {status :"400"}
            
            ))
        
    }
}
