import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const ShowCategory = ({ nextStep ,categoryDataProp}) => {
    const [categoryData, setcategoryData] = useState([] || categoryDataProp);
    const [selectedId, setSelectedId] = useState("");
    const router = useRouter();
    const fetchData = async () => {
        try {
          const response = await axios.get("/api/servicecategory");
          setcategoryData(response.data.servicecategory);
          console.log("Api Response", response.data.servicecategory);
        } catch (error) {
          console.error("There was an error fetching the data:", error);
        }
      };
    
      useEffect(() => {
        fetchData();
      }, []);
      const handleSelectChange = (e) => {
        setSelectedId(e.target.value);
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedId) {
        //   router.push(`/stepwo?selectedId=${selectedId}`);
        } else {
          console.error("No ID selected");
        }
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
                onChange={handleSelectChange}
                className="w-full rounded-md py-3 bg-white text-black shadow-lg ring-2"
              > 
              <option >
              select Option
            </option> 
                {categoryData.map((item, index) => (
                 
                  <option key={index} value={item.id}>
                    {item.catName}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              onClick={nextStep}
              className={
                "border-none rounded  justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
              }
            >
              Next
            </button>
          </div>
      </form>
   </>
  )
}

export default ShowCategory