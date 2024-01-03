import React, { useState } from "react";
import Button from "@/Component/Button";
import { InputForm } from "@/Component/Input";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import axios from "axios";
import { UseidContext } from "@/Component/ServiceContext";
import { useRouter } from "next/navigation"; // Corrected import for useRouter
const ServiceFaq = ({ prevStep }) => {
  const router = useRouter();
  const { id, setid } = UseidContext();
  const [faqs, setFaqs] = useState([
    { heading: "", description: "", file: null },
  ]);
  const [loading, setLoading] = useState(false);

  const addFaq = () => {
    setFaqs([...faqs, { heading: "", description: "", file: null }]);
  };

  const removeFaq = (index) => {
    setFaqs(faqs.filter((_, i) => i !== index));
  };

  const handleChange = (index, name, value) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index][name] = value;
    setFaqs(updatedFaqs);
  };

  const handleImageChange = (index, e) => {
    const updatedFaqs = [...faqs];
    updatedFaqs[index].file = e.target.files[0];
    setFaqs(updatedFaqs);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData();
    faqs.forEach((faq, index) => {
      // Use the index to group each FAQ's properties
      if (faq.file) {
        formData.append(`faqs[${index}][Faqimage]`, faq.file, faq.file.name);
      }

      formData.append(`faqs[${index}][heading]`, faq.heading);
      formData.append(`faqs[${index}][description]`, faq.description);
      formData.append(`faqs[${index}][planId]`, id.toString()); // Assuming 'id' is available in the scope
    });

    try {
      const response = await axios.post("/api/servicefaq", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(response.data);
      setid(null);
      router.push('/dashboard');
      // Redirect or update UI after success
    } catch (error) {
      console.error("Error submitting the FAQs:", error);
      alert("Error submitting the FAQs. Check the console for more details.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {faqs.map((faq, index) => (
        <div key={index} className="border rounded p-4 space-y-4 mt-3 mb-3">
          <div className="flex justify-between items-center">
            <span className="font-medium">Service FAQ {index + 1}</span>
            <IoIosRemoveCircleOutline
              size={20}
              onClick={() => removeFaq(index)}
            />
          </div>
          <InputForm
            type="file"
            placeholder="FAQ Image"
            name="Faqimage"
            onChange={(e) => handleImageChange(index, e)}
          />
          <InputForm
            type="text"
            placeholder="FAQ Heading"
            name="heading"
            value={faq.heading}
            onChange={(e) => handleChange(index, "heading", e.target.value)}
          />
          <InputForm
            type="text"
            placeholder="FAQ Description"
            name="description"
            value={faq.description}
            onChange={(e) => handleChange(index, "description", e.target.value)}
          />
        </div>
      ))}

      <div className="p-2 cursor-pointer bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md w-[100px] flex justify-center rounded-md mt-3 mb-3" onClick={addFaq}>
        + Add FAQ
      </div>

      <div className="flex gap-2">
        <Button
          onClick={prevStep}
          text="Back"
          className={
            "border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
          }
        />
        <Button
          type="submit"
          className={
            "border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
          }
          text={loading ? "Loading..." : "Submit"}
          disabled={loading}
        />
      </div>
    </form>
  );
};

export default ServiceFaq;
