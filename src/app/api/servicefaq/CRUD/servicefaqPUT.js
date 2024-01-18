import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import path from "path";
import fs from "fs/promises";

const prisma = new PrismaClient();

// Helper function to process form data
async function processFormData(formData) {
    let faqs = [];
    for (let [key, value] of formData) {
      console.log("stage 1,",`Key: ${key}, Value: ${value}`); // Debug log
      let match = key.match(/faqs\[(\d+)\]\[(.+)\]/);
      if (match) {
        let [index, property] = [parseInt(match[1]), match[2]];
        console.log("stage 2",`Index: ${index}, Property: ${property}`); // Debug log
        faqs[index] = faqs[index] || {};
        if (property === 'planId') {
          faqs[index][property] = parseInt(value, 10) || null;
        } else {
          faqs[index][property] = (value instanceof File) ? value : value.toString();
        }
      }
    }
    console.log(`Processed FAQs:`, faqs); // Debug log
    return faqs;
  }
  

// Helper function to handle file upload and validation
async function handleFileUpload(file) {
  if (file.size > 10000000) {
    throw new Error("Image should be less than 10MB in size");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const imageFileName = `${Date.now()}_${file.name}`;
  const relativeImagePath = `./public/uploads/${imageFileName}`;
  const absoluteImagePath = path.join(process.cwd(), relativeImagePath);

  await fs.writeFile(absoluteImagePath, buffer);
  return relativeImagePath;
}

// Helper function to update data in the database
async function updateDatabase(id, data) {
  return await prisma.servicefaq.update({
    where: { id: parseInt(id, 10) },
    data,
  });
}

// Main function for the update API endpoint
export const servicefaqPUT = async (req) => {
  try {
    let formData = await req.formData();

    let faqs = await processFormData(formData);
console.log("faqs",faqs);
    const updatedFaqs = await Promise.all(faqs.map(async faq => {
        console.log(faq)
      if (faq.Faqimage && faq.Faqimage instanceof File) {
        faq.Faqimage = await handleFileUpload(faq.Faqimage);
      }
      console.log("updatedFaqs",updatedFaqs);
      // Ensure ID is parsed as an integer
      const id = parseInt(faq.id, 10);
      if (isNaN(id)) {
        throw new Error("Invalid ID provided.");
      }

      return updateDatabase(id, {
        Faqimage: faq.Faqimage || '',
        heading: faq.heading || '',
        description: faq.description || '',
        planId: faq.planId // This is now an integer or null
      });
    }));

    console.log(updatedFaqs);
    return NextResponse.json({ success: true, data: updatedFaqs }, { status: 200 });
  } catch (err) {
    console.error(err.message);
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
};
