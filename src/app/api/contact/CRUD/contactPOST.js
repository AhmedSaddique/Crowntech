import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const contactPOST = async (req) => {
    const body = await req.json();
    const { Name , email , phoneNumber , companyName , subject ,Comment } = body;
    console.log(body)
    try {
        const contact = await prisma.contact.create({
            data: {
                Name,
                email,
                phoneNumber,
                companyName,
                subject,
                Comment

            }
        })
        return new NextResponse(JSON.stringify({
            success: "User saved successfully", contact },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not saved", error },
            {status :"400"}
            
            ))
    }

};