import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceplanPUT = async (req, { params }) => {
    try {
        const id = parseInt(params.id, 10);
        const body = await req.json();
        const { title, text, price, chooseplan, description, feature, tabId } = body;
        const serviceplan = await prisma.serviceplan.update({
            where: {
                id: parseInt(id, 10),
            },
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

   
        return new NextResponse(JSON.stringify({
            success: "Data updated successfully", serviceplan
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({
            error: "Data not updated", message: error.message || error.toString()
        }), { status: 400 });
    }
};
