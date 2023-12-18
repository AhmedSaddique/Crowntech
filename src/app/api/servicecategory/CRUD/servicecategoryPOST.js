import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicecategoryPOST = async (req) => {
    const body = await req.json();
    const { catName } = body;
    console.log(body)
    try {
        const servicecategory = await prisma.servicecategory.create({
            data: {
                catName,
            }
        })
        return new NextResponse(JSON.stringify({
            success: "User saved successfully", servicecategory },
            {status :"200"}
            
            ))
        
    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "User not saved", error },
            {status :"400"}
            
            ))
    }

};