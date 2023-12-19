import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const servicefaqGET = async (req) => {
    try {
        const servicefaqs = await prisma.servicefaq.findMany({
            include: {
                plan: true, // Include the related plan in the response
            },
        });

        // Return a success response with the list of servicefaqs
        return new NextResponse(
            JSON.stringify({
                success: true,
                servicefaqs,
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

export const servicefaqGetbyID = async (req, { params }) => {
    try {
        const id = params.id;
        const servicefaq = await prisma.servicefaq.findUnique({
            where: {
                id: parseInt(id, 10),
            },
            include: {
                plan: true, // Include the related plan in the response
            },
        });

        if (!servicefaq) {
            return new NextResponse(
                JSON.stringify({
                    error: "Data not found",
                }),
                { status: "400" }
            );
        }

        return new NextResponse(
            JSON.stringify({
                success: "Data fetched successfully",
                servicefaq,
            }),
            { status: "200" }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                error: "Data not fetched",
                details: error.message,
            }),
            { status: "400" }
        );
    }
};
