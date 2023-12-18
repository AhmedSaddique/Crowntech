import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const contactPUT = async (req, {params}) => {
    try {
        const id = params.id;
        const check = await prisma.contact.findUnique({
            where: {
                id : parseInt(id, 10),
            }
        });
        if(!check){
            return new NextResponse(JSON.stringify({
                error: "User not found", error },
                {status :"400"}
                ))
        }
        const jsonData = await req.json();
        const updatedUser = await prisma.contact.update({
            where: {
                id : parseInt(id, 10)},
                 data: jsonData
        })
        return new NextResponse(JSON.stringify({
            success: "User updated successfully", updatedUser },
            {status :"200"}
            
            ))

    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not updated", error },
            {status :"400"}
            
            ))
        
    }
}