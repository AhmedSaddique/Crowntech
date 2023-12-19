// File: serviceplanDELETE.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceplanDELETE = async (req, { params }) => {
    try {
        const id = params.id;

        // Delete the serviceplan and its associated features
        const deletedServiceplan = await prisma.serviceplan.delete({
            where: { id: parseInt(id, 10) },
            include: { feature: true }, // Include associated features in the response
        });

        if (!deletedServiceplan) {
            return new NextResponse(
                JSON.stringify({
                    error: "Serviceplan not found",
                    success: false,
                }),
                { status: 404 }
            );
        }

        // Return a success response with the deleted serviceplan and its features
        return new NextResponse(
            JSON.stringify({
                success: "Serviceplan and associated features deleted successfully",
                serviceplan: deletedServiceplan,
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
