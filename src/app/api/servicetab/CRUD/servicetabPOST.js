import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicetabPOST = async (req) => {
    try {
        const body = await req.json();
        const { titlehead, title, heading, description, subdata, serviceInfoId } = body;

        // Create a new servicetab record
        const servicetab = await prisma.servicetab.create({
            data: {
                titlehead,
                title,
                heading,
                description,
                subdata: {
                    create: subdata.map(subItem => ({ ...subItem })), // Assuming subdata is an array of ServiceSubItem
                },
                serviceInfoId,
            },
            include: {
                subdata: true, // Include the related subdata in the response
                serviceInfos: true, // Include the related serviceInfo in the response
            },
        });

        // Return a success response with the created servicetab
        return new NextResponse(
            JSON.stringify({
                success: "Servicetab saved successfully",
                servicetab,
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
