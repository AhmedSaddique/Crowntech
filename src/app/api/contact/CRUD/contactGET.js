import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const contactGET = async (req) => {
    try {
        const contact = await prisma.contact.findMany();
        return new NextResponse(JSON.stringify({
            success: "Users fetched successfully", contact },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Users not fetched", error },
            {status :"400"}
            
            ))
    }
};

export const contactGetbyID = async (req, {params}) =>{

    try {
        const id = params.id;
        const contact = await prisma.contact.findUnique({
            where: {
                id : parseInt(id, 10),
            }
        });
        if(!contact){
            return new NextResponse(JSON.stringify({
                error: "User not found", contact },
                {status :"400"}
                
                ))
        }
        return new NextResponse(JSON.stringify({
            success: "User fetched successfully", contact },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not fetched", error },
            {status :"400"}
            
            ))
        
    }
}