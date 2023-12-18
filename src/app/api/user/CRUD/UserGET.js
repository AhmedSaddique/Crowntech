import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const userGET = async (req) => {
    try {
        const users = await prisma.user.findMany();
        return new NextResponse(JSON.stringify({
            success: "Users fetched successfully", users },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Users not fetched", error },
            {status :"400"}
            
            ))
    }
};

export const UserGetbyID = async (req, {params}) =>{


    try {
        const id = params.id;
        const user = await prisma.user.findUnique({
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
            success: "User fetched successfully", user },
            {status :"200"}
            
            ))
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not fetched", error },
            {status :"400"}
            
            ))
        
    }
}