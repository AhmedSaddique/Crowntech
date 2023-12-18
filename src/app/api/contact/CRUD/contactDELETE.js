import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const contactDELETE = async (req, {params}) => {
    try {
        const id = params.id;
        const contact = await prisma.contact.delete({
            where: {
                id : parseInt(id, 10),
            }
        });
        if(!contact){
            return new NextResponse(JSON.stringify({
                error: "User not found", error },
                {status :"400"}
                
                ))
        }
        return new NextResponse(JSON.stringify({
            success: "User deleted successfully", contact },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not deleted", error },
            {status :"400"}
            
            ))
        
    }
}
