import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceinfoPOST = async (req) => {
    try {
        const body = await req.json();
        const { serviceImage, serviceName, serviceText, categoryId } = body;

        // Create a new serviceinfo record
        const serviceinfo = await prisma.serviceinfo.create({
            data: {
                serviceImage,
                serviceName,
                serviceText,
                category: {
                    connect: {
                        id: categoryId, // Connect to the specified Servicecategory
                    },
                },
            },
            include: {
                category: true, // Include the related category in the response
            },
        });

        // Return a success response with the created serviceinfo
        return new NextResponse(
            JSON.stringify({
                success: "Service info saved successfully",
                serviceinfo,
            }),
            { status: 200 }
        );
    } catch (error) {
        // Handle errors and return an error response
        console.error("Error occurred:", error);
        return new NextResponse(
            JSON.stringify({
                error: "Error in processing request",
                details: error.message,
                success: false,
                status: 400,
            }),
            { status: 400 }
        );
    }
};
