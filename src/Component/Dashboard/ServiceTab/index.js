import React, { useState, useEffect } from "react";
import axios from "axios";

import { IoIosRemoveCircleOutline } from "react-icons/io";
import { MdOutlineSubtitles } from "react-icons/md";
import { UseidContext } from "@/Component/ServiceContext";
import { InputForm } from "@/Component/Input";
import Button from "@/Component/Button";

const ServiceTab = ({ nextStep, prevStep }) => {
  const { id , setid } = UseidContext();
  const [loading, setLoading] = useState(false);
  const [tabsData, setTabsData] = useState([
    {
      title: "",
      heading: "",
      description: "",
      subdata: [{ link: "", description: "" }],
      serviceInfoId: id,
    },
  ]);

  useEffect(() => {
    console.log("Service info ID:", id);
  }, [id]);

  const handleAddTab = () => {
    setTabsData((prevData) => [
      ...prevData,
      {
        title: "",
        heading: "",
        description: "",
        subdata: [{ link: "", description: "" }],
        serviceInfoId: id,
      },
    ]);
  };

  const handleRemoveTab = (index) => {
    setTabsData((prevData) => prevData.filter((_, i) => i !== index));
  };

  const handleAddSubItem = (tabIndex) => {
    setTabsData((prevData) =>
      prevData.map((tab, index) =>
        index === tabIndex
          ? {
              ...tab,
              subdata: [
                ...(Array.isArray(tab.subdata) ? tab.subdata : []), // Check and provide a default empty array
                { link: "", description: "" },
              ],
            }
          : tab
      )
    );
  };
  const handleRemoveSubItem = (tabIndex, subItemIndex) => {
    setTabsData((prevData) =>
      prevData.map((tab, index) =>
        index === tabIndex
          ? {
              ...tab,
              subdata: tab.subdata.filter((_, i) => i !== subItemIndex),
            }
          : tab
      )
    );
  };
  const handleChange = (tabIndex, subItemIndex, event) => {
    const { name, value } = event.target;

    setTabsData((prevData) =>
      prevData.map((tab, index) => {
        if (index === tabIndex) {
          // If the change is for a sub-item
          if (subItemIndex !== undefined) {
            return {
              ...tab,
              subdata: tab.subdata.map((subItem, i) =>
                i === subItemIndex ? { ...subItem, [name]: value } : subItem
              ),
            };
          }
          // If the change is for the main tab fields
          else {
            return { ...tab, [name]: value };
          }
        }
        return tab;
      })
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let receivedId = null; // Declare receivedId at a higher scope
    setLoading(true);
    try {
      const serviceInfoIdParsed = parseInt(id, 10);
      if (isNaN(serviceInfoIdParsed)) {
        console.error("Service info ID is undefined or not a valid integer.");
        alert("Error: Invalid Service Info ID.");
        return;
      }
  
      const requestData = tabsData.map(tab => ({
        ...tab,
        serviceInfoId: serviceInfoIdParsed
      }));
  
      console.log("Prepared Request Data:", requestData);
  
      const response = await axios.post("/api/servicetab", requestData);
      console.log("Response Data:", response.data);
  
      if (response.data.responses && response.data.responses.length > 0) {
        receivedId = response.data.responses[0].id; // Assign value to receivedId
        console.log("Received ID:", receivedId);
      } else {
        console.log("No responses found in the data.");
      }
  
      setid(receivedId); // Use receivedId here
      nextStep(receivedId); // And here
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("Error submitting the data. Check the console for more details.");
    }finally {
      setLoading(false);
    }
  };
  
  
  return (
    <form onSubmit={handleSubmit}>
      {tabsData.map((item, itemIndex) => (
        <div key={itemIndex} className="border rounded p-4 space-y-4 mt-3 mb-3">
          <div className="flex justify-between items-center">
            <span className="font-medium text-primary-blue100">
              Add Tab {itemIndex + 1}
            </span>
            <IoIosRemoveCircleOutline
              className="text-primary-blue100"
              size={20}
              onClick={() => handleRemoveTab(itemIndex)}
            />
          </div>
          <InputForm
            placeholder="Tab Name"
            InputIcon={<MdOutlineSubtitles size={25} />}
            name="title"
            onChange={(e) => handleChange(itemIndex, undefined, e)}
            value={item.title}
          />
          <InputForm
            placeholder={"Tab Title"}
            InputIcon={<MdOutlineSubtitles size={25} />}
            name={"heading"}
            onChange={(e) => handleChange(itemIndex, undefined, e)}
            value={item.heading}
          />
          <InputForm
            placeholder={"Tab Text"}
            InputIcon={<MdOutlineSubtitles size={25} />}
            name={"description"}
            onChange={(e) => handleChange(itemIndex, undefined, e)}
            value={item.description}
          />
          <div className="space-y-2 mt-2">
            {Array.isArray(item.subdata) &&
              item.subdata.map((subItem, subIndex) => (
                <div key={subIndex} className="space-y-2">
                  <div className="flex justify-end">
                    <IoIosRemoveCircleOutline
                      size={22}
                      onClick={() => handleRemoveSubItem(itemIndex, subIndex)}
                      className="text-primary-blue100"
                    />
                  </div>
                  <InputForm
                    placeholder={"Tab Point"}
                    InputIcon={<MdOutlineSubtitles size={25} />}
                    name={"link"}
                    onChange={(e) => handleChange(itemIndex, subIndex, e)}
                    value={subItem.link}
                  />
                  <InputForm
                    placeholder={"Tab Point Description"}
                    InputIcon={<MdOutlineSubtitles size={25} />}
                    name={"description"}
                    onChange={(e) => handleChange(itemIndex, subIndex, e)}
                    value={subItem.description}
                  />
                </div>
              ))}
            <div
              className="p-2 cursor-pointer bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md w-[120px] flex justify-center rounded-md mt-3 mb-3"
              onClick={() => handleAddSubItem(itemIndex)}
            >
              + Add Sub Item
            </div>
          </div>
        </div>
      ))}
      <div className="p-2 cursor-pointer bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md w-[100px] flex justify-center rounded-md mt-3 mb-3" onClick={handleAddTab}>
        + Add Item
      </div>
      <div className="flex gap-2">
        <Button
          className="border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
          text="Back"
          onClick={prevStep}
        />
        <Button
          type="submit"
          className="border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
          text={loading ? "Loading..." : "Next"}
        />
      </div>
    </form>
  );
};

export default ServiceTab;
