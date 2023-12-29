import prisma from '@/app/prisma';
import { NextResponse } from 'next/server';
export const servicecategoryGET = async () => {
    try {
        const servicecategories = await prisma.servicecategory.findMany();
    
        return new NextResponse(
          JSON.stringify(
            {
              success: 'Data retrieved successfully',
              servicecategories,
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

export const servicecategoryGetbyID = async (req, { params }) => {
    try {
        const id = params.id;
        const servicecategory = await prisma.servicecategory.findUnique({
          where: {
            id: parseInt(id, 10),
          },
        });
    
        if (!servicecategory) {
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
              servicecategory,
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
