
import { PrismaClient } from '@prisma/client';
import { writeFile } from 'fs/promises';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export const serviceinfoPOST = async (req) => {
    try {
        const data = await req.formData();
        const file = data.get('file');
        if (!file) {
            return NextResponse.json({ message: "Invalid file", success: false, status: 400 });
        }

        // Process file upload
        const bytedata = await file.arrayBuffer();
        const buffer = Buffer.from(bytedata);
        const path = `./public/uploads/info/${file.name}`;
        await writeFile(path, buffer);

        // Extract other form data
        const serviceName = data.get('serviceName');
        const serviceText = data.get('serviceText');
        const categoryId = parseInt(data.get('categoryId')); // Assuming categoryId is passed in the form

        // Create database entry with the uploaded file and relationship
        const serviceinfo = await prisma.serviceinfo.create({
            data: {
                serviceImage: path, // Use the file path
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
            JSON.stringify({
                success: "Service info saved successfully",
                serviceinfo,
            }),
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


// import { PrismaClient } from '@prisma/client';
// import { writeFile } from 'fs/promises'; // Import writeFile
// import { NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export const serviceinfoPOST = async (req) => {
//     try {
//       const data = await req.formData();
//       const file = data.get('file');
//       if (!file) {
//         return NextResponse.json({ message: "Invalid file", success: false, status: 400 });
//       }

//     // Process file upload
//     const bytedata = await file.arrayBuffer();
//     const buffer = Buffer.from(bytedata);
//     const path = `./public/uploads/info/${file.name}`;
//     await writeFile(path, buffer);

//     // Extract other form data
//     const serviceName = data.get('serviceName');
//     const serviceText = data.get('serviceText');

//     // Create database entry
//     const card = await prisma.serviceinfo.create({
//       data: {
//         serviceImage: path, // Use the file path
//         serviceName,
//         serviceText
//       }
//     });

//     return new NextResponse(
//         JSON.stringify({ message: "Post created successfully", card, success: true, status: 200 }),
//         { status: 200 }
//       );
  
//     } catch (error) {
//       console.error("Error occurred:", error);
//       return new NextResponse(
//           JSON.stringify({ message: "Error in processing request", details: error.message, success: false, status: 400 }),
//           { status: 400 }
//       );
//     }
//   };
  