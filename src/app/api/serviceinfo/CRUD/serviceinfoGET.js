import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';


const prisma = new PrismaClient();

export const serviceinfoGET = async (req) => {
    try {
        const serviceinfos = await prisma.serviceinfo.findMany({
          include: {
            category: true, // Include the associated Servicecategory for each record
          },
        });
    
        return new NextResponse(
          JSON.stringify(
            {
              success: 'Data retrieved successfully',
              serviceinfos,
            },
            { status: '200' }
          )
        );
      } catch (error) {
        console.error('Error fetching data:', error);
        return new NextResponse(
          JSON.stringify(
            {
              error: 'Error fetching data',
            },
            { status: '500' }
          )
        );
      } finally {
        await prisma.$disconnect();
      }
    };

    
export const serviceinfoGetbyID = async (req, {params}) =>{
    try {
        const id = params.id;
        const serviceinfo = await prisma.serviceinfo.findUnique({
          where: {
            id: parseInt(id, 10),
          },
          include: {
            category: true, // Include the associated Servicecategory
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
              success: 'Data retrieved successfully',
              serviceinfo,
            },
            { status: '200' }
          )
        );
      } catch (error) {
        console.error('Error fetching data:', error);
        return new NextResponse(
          JSON.stringify(
            {
              error: 'Error fetching data',
            },
            { status: '500' }
          )
        );
      } finally {
        await prisma.$disconnect();
      }
    };