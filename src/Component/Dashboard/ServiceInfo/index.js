// ServiceInfo.jsx
import React, { useState } from "react";
import Button from "@/Component/Button";
import { InputForm } from "@/Component/Input";
import { CiImageOn } from "react-icons/ci";
import { MdOutlineSubtitles, MdOutlineTextFields } from "react-icons/md";
import axios from "axios";
import { UseidContext } from "@/Component/ServiceContext";

const ServiceInfo = ({ nextStep, prevStep }) => {
  const { id, setid } = UseidContext();
  const [serviceData, setServiceData] = useState({
    serviceImage: "",
    serviceName: "",
    serviceText: "",
  });
  const [file, setFile] = useState();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setServiceData(prev => ({ ...prev, [name]: value }));
  };
  const handleImageChange = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      console.error("No file selected");
      return;
    }
    const categoryId = parseInt(id, 10);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('serviceName', serviceData.serviceName);
    formData.append('serviceText', serviceData.serviceText);
    formData.append('categoryId', categoryId);
  
    if (isNaN(categoryId)) {
      console.error("Invalid category ID");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post("/api/serviceinfo", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response.data);
      const newId = response.data.serviceinfo.id;
      setid(newId);
      nextStep(newId);
    } catch (error) {
      console.error("Submission error:", error);
    } finally{
      setLoading(false);
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        type="file"
        placeholder={"Title"}
        InputIcon={<CiImageOn size={25} />}
        name={"serviceImage"}
        onChange={handleImageChange}
      />
      <InputForm
        placeholder={"Title"}
        InputIcon={<MdOutlineSubtitles size={25} />}
        name={"serviceName"}
        value={serviceData.serviceName}
        onChange={handleChange}
      />
      <InputForm
        placeholder={"Text"}
        InputIcon={<MdOutlineTextFields size={25} />}
        name={"serviceText"}
        value={serviceData.serviceText}
        onChange={handleChange}
      />
      <div className="flex gap-2">
        <Button
          onClick={prevStep}
          className={
            "border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
          }
          text={"Back"}
        />
         <Button
          type={"submit"}
          className={
            `border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md ${loading ? 'opacity-50 cursor-not-allowed' : ''}` // Add conditional class
          }
          text={loading ? "Loading..." : "Next"} // Change button text based on loading state
          disabled={loading} // Disable the button when loading
        />
      </div>
    </form>
  );
};

export default ServiceInfo;
