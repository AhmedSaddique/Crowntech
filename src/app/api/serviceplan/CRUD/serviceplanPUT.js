import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceplanPUT = async (req) => {
  try {
    const bodyArray = await req.json();
    console.log('Received request body:', bodyArray);

    if (!Array.isArray(bodyArray)) {
      throw new Error("Request body must be an array of objects");
    }

    const responses = await Promise.all(bodyArray.map(async (body) => {
      const { id, title, text, price, chooseplan, description, feature, tabId } = body;

      if (!id) {
        throw new Error("Each object must include an 'id' field for updating");
      }

      // Process the feature array, assuming each feature object contains necessary fields
      const processedFeatures = feature.map(f => ({
        update: {
          where: { id: f.id },
          data: { /* update data for feature here */ }
        }
      }));
  // Handle subdata updates
  let featureUpdate = feature.map((subItem) => {
    return prisma.servicefeature.upsert({
      where: { id: subItem.id || -1 }, // -1 or a non-existing id for create operation
      update: {
        option: subItem.option,
      },
      create: {
        option: subItem.option,
        mainItemId: id // Assuming mainItemId connects to servicetab
      },
    });
  });

  await Promise.all(featureUpdate);

      return prisma.serviceplan.update({
        where: { id: id },
        data: {
          title,
          text,
          price,
          chooseplan,
          description,
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

    return new NextResponse(
      JSON.stringify({ success: "Service plans updated successfully", responses }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new NextResponse(
      JSON.stringify({ error: error.message }),
      { status: 400 }
    );
  }
};
