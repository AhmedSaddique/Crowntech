import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const userDELETE = async (req, {params}) => {
    try {
        const id = params.id;
        const user = await prisma.user.delete({
            where: {
                id : parseInt(id, 10),
            }
        });
        if(!user){
            return new NextResponse(JSON.stringify({
                error: "User not found", error },
                {status :"400"}
                
                ))
        }
        return new NextResponse(JSON.stringify({
            success: "User deleted successfully", user },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not deleted", error },
            {status :"400"}
            
            ))
        
    }
}
