import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicetabPOST = async (req) => {
    try {
        const items = await req.json(); // Assuming items is the array from frontend

        // You should loop over each item if you're sending more than one
        items.forEach(async (item) => {
            const { titlehead, title, heading, description, subdata } = item;

            if (!Array.isArray(subdata)) {
                throw new Error("subdata is not an array or is undefined");
            }

            const servicetab = await prisma.servicetab.create({
                data: {
                    titlehead,
                    title,
                    heading,
                    description,
                    subdata: {
                        create: subdata.map(subItem => ({
                            link: subItem.link,
                            description: subItem.description
                        }))
                    }
                },
                include: {
                    subdata: true // Include sub-items in the response
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

