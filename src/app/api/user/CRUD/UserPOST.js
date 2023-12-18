import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const userPOST = async (req) => {
    const body = await req.json();
    const { fullName , phoneNumber , userName , email , password } = body;
    console.log(body)
    try {
        const user = await prisma.user.create({
            data: {
                fullName,
                phoneNumber,
                userName,
                email,
                password
            }
        })
        return new NextResponse(JSON.stringify({
            success: "User saved successfully", user },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not saved", error },
            {status :"400"}
            
            ))
    }

};