import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const serviceplanGET = async (req) => {
    try {
        const serviceplans = await prisma.serviceplan.findMany({
            include: {
                feature: true, // Include features in the response
                tab: true // Include the related tab in the response
            },
        });

        // Return a success response with the list of serviceplans
        return new NextResponse(
            JSON.stringify({
                success: true,
                serviceplans,
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

export const serviceplanGetbyID = async (req, {params}) =>{
    try {
        const { id } = params;// Assuming 'id' is a parameter in your route
        const serviceplan = await prisma.serviceplan.findUnique({
            where: { id: parseInt(id) },
            include: {
                feature: true, // Include features in the response
                tab: true // Include the related tab in the response
            },
        });

        if (!serviceplan) {
            return new NextResponse(
                JSON.stringify({
                    error: "Serviceplan not found",
                    success: false,
                }),
                { status: 404 }
            );
        }

        // Return a success response with the found serviceplan
        return new NextResponse(
            JSON.stringify({
                success: true,
                serviceplan,
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