import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceinfoDELETE = async (req, { params }) => {
  try {
    const id = params.id;
    const serviceinfo = await prisma.serviceinfo.delete({
      where: {
        id: parseInt(id, 10),
      },
    });

    if (!serviceinfo) {
      return new NextResponse(
        JSON.stringify(
          {
            error: 'Data not found',
          },
          { status: '404' }
        )
      );
    }

    return new NextResponse(
      JSON.stringify(
        {
          success: 'Data deleted successfully',
          serviceinfo,
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
