import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceplanPOST = async (req) => {
    try {
        const bodyArray = await req.json();
        console.log('Received request body:', bodyArray);

        // Check if bodyArray is actually an array
        if (!Array.isArray(bodyArray)) {
            throw new Error("Request body must be an array of objects");
        }

        const responses = await Promise.all(bodyArray.map(async (body) => {
            const { title, text, price, chooseplan, description, feature, tabId } = body;

            // Process the feature array, assuming each feature object contains necessary fields
            const processedFeatures = feature.map(f => ({ ...f }));

            return prisma.serviceplan.create({
                data: {
                    title,
                    text,
                    price,
                    chooseplan,
                    description,
                    feature: {
                        create: processedFeatures
                    },
                    tab: {
                        connect: { id: tabId }
                    },
                },
                include: {
                    feature: true,
                    tab: true
                }
            });
        }));

        // Return a success response with all created serviceplans
        return new NextResponse(
            JSON.stringify({ success: "Serviceplans saved successfully", responses }),
            { status: 201 }
        );
    } catch (error) {
        console.error("Error occurred:", error);
        return new NextResponse(
            JSON.stringify({ error: error.message }),
            { status: 400 }
        );
    }
};
