import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceplanPOST = async (req) => {
    try {
        const body = await req.json();
        const { title, text, price, chooseplan, description, feature, tabId } = body;

        const serviceplan = await prisma.serviceplan.create({
            data: {
                title,
                text,
                price,
                chooseplan,
                description,
                feature: {
                    create: feature.map(subItem => ({ ...subItem }))
                },
                tabId,
            },
            include: {
                feature: true, // Include features in the response
                tab: true
            }
        });

        // Return a success response with the created serviceplan
        return new NextResponse(
            JSON.stringify({
                success: "Serviceplan saved successfully",
                serviceplan,
            }),
            { status: 201 } // Use 201 Created status code
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
