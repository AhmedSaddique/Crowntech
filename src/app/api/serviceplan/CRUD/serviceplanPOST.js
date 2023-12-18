import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceplanPOST = async (req) => {
    try {
        const items = await req.json(); // Assuming items is the array from frontend

        // You should loop over each item if you're sending more than one
        items.forEach(async (item) => {
            const { title, text, price,chooseplan, description, feature } = item;

            if (!Array.isArray(feature)) {
                throw new Error("feature is not an array or is undefined");
            }

            const servicetab = await prisma.serviceplan.create({
                data: {
                    title,
                    text,
                    price,
                    chooseplan,
                    description,
                    feature: {
                        create: feature.map(subItem => ({
                            option: subItem.option
                        }))
                    }
                },
                include: {
                    feature: true // Include sub-items in the response
                }
            });
        });

        return new NextResponse(JSON.stringify({
            success: "Data saved successfully", items
        }), { status: 200 });

    } catch (error) {
        console.error(error);
        return new NextResponse(JSON.stringify({
            error: "Data not saved", message: error.message || error.toString()
        }), { status: 400 });
    }
};

