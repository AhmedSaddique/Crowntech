import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceplanPUT = async (req, { params }) => {
    try {
        const id = parseInt(params.id, 10);
        const check = await prisma.serviceplan.findUnique({ where: { id } });
        if (!check) {
            return new NextResponse(JSON.stringify({
                error: "Data not found"
            }), { status: 400 });
        }

        const jsonData = await req.json();
        const { feature, ...restData } = jsonData;


        await prisma.Servicefeature.deleteMany({ where: { mainItemId: id } });

        const updatedserviceplan = await prisma.serviceplan.update({
            where: { id },
            data: {
                ...restData,
                feature: {
                    create: feature
                }
            },
            include: {
                feature: true
            }
        });

        return new NextResponse(JSON.stringify({
            success: "Data updated successfully", updatedserviceplan
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({
            error: "Data not updated", message: error.message || error.toString()
        }), { status: 400 });
    }
};
