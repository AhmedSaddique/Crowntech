// File: servicefaqPUT.js
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicefaqPUT = async (req, { params }) => {
    try {
        const id = params.id;
        const body = await req.json();
        const { Faqimage, heading, description, planId } = body;

        const updatedServicefaq = await prisma.servicefaq.update({
            where: {
                id: parseInt(id, 10),
            },
            data: {
                Faqimage,
                heading,
                description,
                planId,
            },
            include: {
                plan: true, // Include the related plan in the response
            },
        });

        return new NextResponse(
            JSON.stringify({
                success: "Data updated successfully",
                servicefaq: updatedServicefaq,
            }),
            { status: "200" }
        );
    } catch (error) {
        return new NextResponse(
            JSON.stringify({
                error: "Data not updated",
                details: error.message,
            }),
            { status: "400" }
        );
    }
};
