// File: serviceinfoPUT.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceinfoPUT = async (req,{params}) => {
    try {
        const id = parseInt(params.id, 10);
        const body = await req.json();
        const {serviceImage, serviceName, serviceText, categoryId } = body;
        // Update the existing serviceinfo
        const serviceinfo = await prisma.serviceinfo.update({
            where: {
                id: parseInt(id, 10),
            },
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

        // Return a success response with the updated serviceinfo
        return new NextResponse(
            JSON.stringify({
                success: "Serviceinfo updated successfully",
                serviceinfo: serviceinfo,
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
                status: 500,
            }),
            { status: 500 }
        );
    }
};
