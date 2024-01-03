import React, { useEffect, useState } from "react";
import axios from "axios";
import { UseidContext } from "@/Component/ServiceContext";

const ShowCategory = ({ nextStep, categoryDataProp }) => {
  const [categoryData, setCategoryData] = useState([] || categoryDataProp);
  const { setid } = UseidContext();
  const [selectedCategoryId, setSelectedCategoryId] = useState();


  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;
    setSelectedCategoryId(categoryId);
    setid(categoryId); // This sets the id in the context
    console.log("Selected Category ID: ", categoryId);
  };


  const fetchData = async () => {
    try {
    
      const response = await axios.get("/api/servicecategory");
      setCategoryData(response.data.servicecategories);
      console.log("Api Category Res", response.data.servicecategories);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedCategoryId) {
      // Optionally show an error message to the user
      alert("Please select a category.");
      return;
    }
    nextStep();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="space-y-3">
          <div className="space-y-1">
            <label className="text-justify font-normal text-black">
              Service Category
            </label>
            <select
              className="w-full rounded-md py-3 bg-white text-black shadow-lg ring-2"
              onChange={handleCategoryChange}
              value={selectedCategoryId}
            >
              <option value="">Select Option</option>
              {categoryData &&
                categoryData.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.catName}
                  </option>
                ))}
            </select>
          </div>
          <button
            type="submit"
            className={
              "border-none rounded justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
            }
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default ShowCategory;
