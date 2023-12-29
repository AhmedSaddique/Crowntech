import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const servicetabGET = async (req) => {
  try {
    const servicetabs = await prisma.servicetab.findMany({
      include: {
        subdata: true,
        serviceInfos: true,
      },
    });
    
    return new NextResponse(
        JSON.stringify({
            success: true,
            servicetabs,
        }),
        { status: 200 }
    );
} catch (error) {
    console.error("Error occurred:", error);
    return new NextResponse(
        JSON.stringify({
            error: "Error in processing request",
            details: error.message,
            success: false,
            status: 500,
        }),
        { status: 500 }
    );
}
};

export const servicetabGetbyID = async (req, { params }) => {
  try {
    const { id } = params; // Correctly destructure 'id' from params
    const servicetab = await prisma.servicetab.findUnique({
      where: { id: parseInt(id) },
    });

    if (!servicetab) {
      return new NextResponse(
        JSON.stringify({
          error: "Servicetab not found",
          success: false,
          status: 404,
        }),
        { status: 404 }
      );
    }

    return new NextResponse(
      JSON.stringify({
        success: true,
        servicetab,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error occurred:", error);
    return new NextResponse(
      JSON.stringify({
        error: "Error in processing request",
        details: error.message,
        success: false,
        status: 500,
      }),
      { status: 500 }
    );
  }
};
