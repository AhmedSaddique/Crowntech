import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicetabPUT = async (req) => {
  try {
    const bodyArray = await req.json();
    console.log('Received request body:', bodyArray);

    if (!Array.isArray(bodyArray)) {
      throw new Error("Request body must be an array of objects");
    }

    const responses = await Promise.all(bodyArray.map(async (body) => {
      const { id, title, heading, description, subdata, serviceInfoId } = body;

      if (!id) {
        throw new Error("Each object must include an 'id' field for updating");
      }

      // Handle subdata updates
      let subdataUpdates = subdata.map((subItem) => {
        return prisma.serviceSubItem.upsert({
          where: { id: subItem.id || -1 }, // -1 or a non-existing id for create operation
          update: {
            link: subItem.link,
            description: subItem.description
          },
          create: {
            link: subItem.link,
            description: subItem.description,
            mainItemId: id // Assuming mainItemId connects to servicetab
          },
        });
      });

      await Promise.all(subdataUpdates);

      return prisma.servicetab.update({
        where: { id: id },
        data: {
          title,
          heading,
          description,
          serviceInfos: { connect: { id: serviceInfoId } },
        },
        include: { subdata: true, serviceInfos: true },
      });
    }));

    return new NextResponse(
      JSON.stringify({ success: "Servicetabs updated successfully", responses }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ error: error.message }),
      { status: 400 }
    );
  }
};
