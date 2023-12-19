import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicetabPUT = async (req,{ params }) => {
    try {
        const id = parseInt(params.id, 10);
        const body = await req.json();
        const { titlehead, title, heading, description, subdata, serviceInfoId } = body;
        const servicetab = await prisma.servicetab.update({
            where: {
                id: parseInt(id, 10),
            },
            data: {
                titlehead,
                title,
                heading,
                description,
                subdata: {
                    create: subdata, // Assuming subdata is an array of ServiceSubItem
                },
                serviceInfoId,
            },
            include: {
                subdata: true, // Include the related subdata in the response
                serviceInfos: true, // Include the related serviceInfo in the response
            },
        });

        return new NextResponse(JSON.stringify({
            success: "Data updated successfully", servicetab
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({
            error: "Data not updated", message: error.message || error.toString()
        }), { status: 400 });
    }
};