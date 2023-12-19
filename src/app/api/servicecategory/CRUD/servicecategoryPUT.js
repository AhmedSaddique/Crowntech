import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicecategoryPUT = async (req, { params }) => {
    try {
        const id = parseInt(params.id, 10);
        const body = await req.json();
        const { catName } = body; // Remove the 's' here

        const servicecategory = await prisma.servicecategory.update({
            where: {
                id: parseInt(id, 10),
            },
            data: {
                catName,
            },
        });

        return new NextResponse(JSON.stringify({
            success: "Category updated successfully",
            servicecategory,
        }), { status: "200" });

    } catch (error) {
        return new NextResponse(JSON.stringify({
            error: "Category not updated",
            details: error.message,
        }), { status: "400" });
    }
};
