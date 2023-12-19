import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const servicecategoryDELETE = async (req, { params }) => {
  try {
    const id = params.id;

    // Check if there are associated Serviceinfo records
    const serviceinfos = await prisma.serviceinfo.findMany({
      where: {
        categoryId: parseInt(id, 10),
      },
    });

    if (serviceinfos.length > 0) {
      // Delete associated Serviceinfo records first
      await prisma.serviceinfo.deleteMany({
        where: {
          categoryId: parseInt(id, 10),
        },
      });
    }

    // Now you can safely delete the Servicecategory
    const servicecategory = await prisma.servicecategory.delete({
      where: {
        id: parseInt(id, 10),
      },
    });

    return new NextResponse(
      JSON.stringify(
        {
          success: 'Data deleted successfully',
          servicecategory,
        },
        { status: '200' }
      )
    );
  } catch (error) {
    console.error('Error deleting data:', error);
    return new NextResponse(
      JSON.stringify(
        {
          error: 'Data not deleted',
        },
        { status: '500' }
      )
    );
  } finally {
    await prisma.$disconnect();
  }
};
