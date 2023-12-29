import prisma from '@/app/prisma';
import { NextResponse } from 'next/server';


export const servicecategoryPOST = async (req) => {
    const body = await req.json();
    const { catName } = body;
    console.log(body);

    try {
        const servicecategory = await prisma.servicecategory.create({
            data: {
                catName,
            },
        });

        return new NextResponse(
            JSON.stringify({
                success: "Service category saved successfully",
                servicecategory,
            }),
            { status: 200 }
        );

    } catch (error) {
        console.error("Error occurred:", error);
        return new NextResponse(
            JSON.stringify({
                error: "Service category not saved",
                details: error.message,
                success: false,
                status: 400,
            }),
            { status: 400 }
        );
    }
};
