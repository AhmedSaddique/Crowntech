import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicetabPOST = async (req) => {
  try {
    const bodyArray = await req.json();
    console.log('Received request body:', bodyArray);

    // Check if bodyArray is actually an array
    if (!Array.isArray(bodyArray)) {
      throw new Error("Request body must be an array of objects");
    }

    const responses = await Promise.all(bodyArray.map(async (body) => {
      const { title, heading, description, subdata, serviceInfoId } = body;

      // Your existing logic to handle subdata
      let ServiceSubItem = subdata.map(subItem => ({
        link: subItem.link,
        description: subItem.description
      }));

      return prisma.servicetab.create({
        data: {
          title,
          heading,
          description,
          subdata: { create: ServiceSubItem },
          serviceInfos: { connect: { id: serviceInfoId } },
        },
        include: { subdata: true, serviceInfos: true },
      });
    }));

    return new NextResponse(
      JSON.stringify({ success: "Servicetabs saved successfully", responses }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    // Correct error response using NextResponse
    return new NextResponse(
      JSON.stringify({ error: error.message }),
      { status: 400 }
    );
  }
};
