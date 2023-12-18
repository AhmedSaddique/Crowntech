import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicetabDELETE = async (req, {params}) => {
    try {
        const id = parseInt(params.id, 10);

        // Check for related ServiceSubItem records
        const relatedItems = await prisma.serviceSubItem.findMany({
            where: {
                mainItemId: id
            }
        });

        // If related items exist, delete them
        if (relatedItems.length > 0) {
            await prisma.serviceSubItem.deleteMany({
                where: {
                    mainItemId: id
                }
            });
        }

        // Then, delete the Servicetab
        const servicetab = await prisma.servicetab.delete({
            where: { id }
        });

        if (!servicetab) {
            return new NextResponse(JSON.stringify({ error: "Data not found" }), { status: 400 });
        }

        return new NextResponse(JSON.stringify({ success: "Data deleted successfully", servicetab }), { status: 200 });
    } catch (error) {
        return new NextResponse(JSON.stringify({ error: "Data not deleted", error }), { status: 400 });
    }
}


