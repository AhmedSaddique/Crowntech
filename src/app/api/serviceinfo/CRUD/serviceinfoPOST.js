import { PrismaClient } from "@prisma/client";
import { writeFile } from "fs/promises"; // Import writeFile
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const serviceinfoPOST = async (req) => {
  try {
    const data = await req.formData();
    const file = data.get("file");
    if (!file) {
      return NextResponse.json({
        message: "Invalid file",
        success: false,
        status: 400,
      });
    }

    // Process file upload
    const bytedata = await file.arrayBuffer();
    const buffer = Buffer.from(bytedata);
    const path = `./public/uploads/${file.name}`;
    await writeFile(path, buffer);

      // Extract other form data
      const serviceName = data.get('serviceName');
      const serviceText = data.get('serviceText');
      const categoryId = parseInt(data.get('categoryId'), 10);
  
      if (isNaN(categoryId)) {
        throw new Error("Invalid category ID");
      }
    // Create a new serviceinfo record
    const serviceinfo = await prisma.serviceinfo.create({
      data: {
        serviceImage: path,
        serviceName,
        serviceText,
        category: {
          connect: {
            id: categoryId, // Connect to the specified Servicecategory
          },
        },
      },
      include: {
        category: true, // Include the related category in the response
      },
    });

    return new NextResponse(
        JSON.stringify({ message: "Post created successfully", serviceinfo, success: true, status: 200 }),
        { status: 200 }
      );
  
    } catch (error) {
      console.error("Error occurred:", error);
      return new NextResponse(
          JSON.stringify({ message: "Error in processing request", details: error.message, success: false, status: 400 }),
          { status: 400 }
      );
    }
  };