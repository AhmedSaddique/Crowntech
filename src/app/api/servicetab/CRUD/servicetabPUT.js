import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicetabPUT = async (req, { params }) => {
    try {
        const id = parseInt(params.id, 10);
        const check = await prisma.servicetab.findUnique({ where: { id } });
        if (!check) {
            return new NextResponse(JSON.stringify({
                error: "Data not found"
            }), { status: 400 });
        }

        const jsonData = await req.json();
        const { subdata, ...restData } = jsonData;


        await prisma.serviceSubItem.deleteMany({ where: { mainItemId: id } });

        const updatedservicetab = await prisma.servicetab.update({
            where: { id },
            data: {
                ...restData,
                subdata: {
                    create: subdata
                }
            },
            include: {
                subdata: true
            }
        });

        return new NextResponse(JSON.stringify({
            success: "Data updated successfully", updatedservicetab
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({
            error: "Data not updated", message: error.message || error.toString()
        }), { status: 400 });
    }
};
