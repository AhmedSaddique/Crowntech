import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const servicetabGET = async (req) => {
    try {
        const servicetab = await prisma.servicetab.findMany({
            include: {
              subdata: true, // This will include the subdata in the result
            }
          });
        
        return new NextResponse(JSON.stringify({
            success: "Data fetched successfully", servicetab },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not fetched", error },
            {status :"400"}
            
            ))
    }
};

export const servicetabGetbyID = async (req, {params}) =>{


    try {
        const id = params.id;
        const servicetab = await prisma.servicetab.findUnique({
            where: {
              id: parseInt(id, 10),
            },
            include: {
              subdata: true, // This will include the subdata in the result
            }
          });
        if(!servicetab){
            return new NextResponse(JSON.stringify({
                error: "Data not found", error },
                {status :"400"}
                
                ))
        }
        return new NextResponse(JSON.stringify({
            success: "Data fetched successfully", servicetab },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Data not fetched", error },
            {status :"400"}
            
            ))
        
    }
}