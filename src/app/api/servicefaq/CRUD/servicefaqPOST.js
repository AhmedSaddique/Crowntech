import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicefaqPOST = async (req) => {
    try {
        const body = await req.json();
        const { Faqimage, heading, description, planId } = body;

        // Check if the specified planId exists
        const existingPlan = await prisma.serviceplan.findUnique({
            where: {
                id: planId,
            },
        });

        if (!existingPlan) {
            return new NextResponse(
                JSON.stringify({
                    error: "Specified planId does not exist",
                    success: false,
                    status: 400,
                }),
                { status: 400 }
            );
        }

        const servicefaq = await prisma.servicefaq.create({
            data: {
                Faqimage,
                heading,
                description,
                planId,
            },
            include: {
                plan: true,
            },
        });

        // Return a success response with the created servicefaq
        return new NextResponse(
            JSON.stringify({
                success: "Servicefaq saved successfully",
                servicefaq,
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
