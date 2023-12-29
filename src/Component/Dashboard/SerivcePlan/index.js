import Button from '@/Component/Button';
import { InputForm } from '@/Component/Input';
import { useidContext } from '@/Component/ServiceContext';
import axios from 'axios';
import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { MdOutlineSubtitles } from 'react-icons/md';

const ServicePlan = ({nextStep , prevStep}) => {
  const { id , setid } = useidContext();
  const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([
        {
          title: "",
          text: "",
          price: "",
          chooseplan: "",
          description: "",
          feature: [{ option: "" }],
          tabId: id,

        },
      ]);
    
      const addItem = () => {
        setItems([
          ...items,
          {
            title: "",
            text: "",
            price: "",
            chooseplan: "",
            description: "",
            feature: [{ option: "" }],
            tabId: id,

          },
        ]);
      };
    
      const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
      };
    
      const addSubItem = (index) => {
        const newItems = [...items];
        newItems[index].feature.push({ option: "" }); // Use 'feature' instead of 'subItems'
        setItems(newItems);
      };
    
      const removeSubItem = (itemIndex, subIndex) => {
        const newItems = [...items];
        newItems[itemIndex].feature = newItems[itemIndex].feature.filter(
          (_, i) => i !== subIndex
        ); // Use 'feature' instead of 'subItems'
        setItems(newItems);
      };
      const handleChange = (itemIndex, name, value, subItemIndex) => {
        const newItems = items.map((item, idx) => {
          if (idx === itemIndex) {
            if (typeof subItemIndex === 'number') {
              // Handle change in sub-item (feature)
              const newFeatures = item.feature.map((feature, fIdx) => {
                if (fIdx === subItemIndex) {
                  return { ...feature, [name]: value };
                }
                return feature;
              });
              return { ...item, feature: newFeatures };
            }
            // Handle change in main item
            return { ...item, [name]: value };
          }
          return item;
        });
        setItems(newItems);
    };
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      let receivedId = null; // Declare receivedId at a higher scope
      try {
        // Update this line to use 'items' instead of 'tabsData'
        const requestData = items.map(item => ({ ...item, tabId: id }));
  
        // Replace this URL with your actual API endpoint
        const response = await axios.post("/api/serviceplan", requestData);
  
        console.log("Response Data:", response.data);
        // Handle the response and proceed to the next step
        if (response.data.responses && response.data.responses.length > 0) {
          receivedId = response.data.responses[0].id; // Assign value to receivedId
          console.log("Received ID:", receivedId);
        } else {
          console.log("No responses found in the data.");
        }
    
        setid(receivedId); // Use receivedId here
        nextStep(receivedId);
      } catch (error) {
        console.error("Error submitting the service plans:", error);
        alert("Error submitting the data. Check the console for more details.");
      }finally {
        setLoading(false);
      }
    };
  return (
    <form onSubmit={handleSubmit}
    >
            {items.map((item, itemIndex) => (
              <div key={itemIndex} className="border rounded p-4 space-y-4 mt-3 mb-3">
                <div className="flex justify-between items-center ">
                  <span className="font-medium">Add Plan {itemIndex + 1}</span>
                  <IoIosRemoveCircleOutline
                    size={20}
                    onClick={() => removeItem(itemIndex)}
                  />
                </div>
                <InputForm
                  type="text"
                  placeholder={"Plan Name"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"title"}
                  value={item.title}
                  onChange={(e) => handleChange(itemIndex, e.target.name, e.target.value)}
                />
                <InputForm
                  placeholder={"Plan text"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"text"}
                  value={item.text}
                  onChange={(e) => handleChange(itemIndex, e.target.name, e.target.value)}
                />
                <InputForm
                type="number"
                  placeholder={"Plan Price"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"price"}
                  value={item.price}
                  onChange={(e) => handleChange(itemIndex, e.target.name, e.target.value)}
                />
                <InputForm
                  placeholder={"Plan Url"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"chooseplan"}
                  value={item.chooseplan}
                  onChange={(e) => handleChange(itemIndex, e.target.name, e.target.value)}
                />
                <InputForm
                  placeholder={"Plan Description"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"description"}
                  value={item.description}
                  onChange={(e) => handleChange(itemIndex, e.target.name, e.target.value)}
                />
                <div className="space-y-2 mt-2">
                  {item.feature.map((subItem, subIndex) => (
                    <div key={subIndex} className=" space-y-2">
                      <div className="flex justify-end ">
                        <IoIosRemoveCircleOutline
                          size={22}
                          onClick={() => removeSubItem(itemIndex, subIndex)}
                        />
                      </div>

                      <InputForm
                        placeholder={"Plan Features"}
                        InputIcon={<MdOutlineSubtitles size={25} />}
                        name={"option"}
                        value={subItem.option}
                        onChange={(e) => handleChange(itemIndex, e.target.name, e.target.value, subIndex)}
                      />
                    </div>
                  ))}
                  <div className="p-2 cursor-pointer bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md w-[120px] flex justify-center rounded-md mt-3 mb-3" onClick={() => addSubItem(itemIndex)}>
                    + Add Features
                  </div>
                </div>
              </div>
            ))}
            <div className="p-2 cursor-pointer bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md w-[100px] flex justify-center rounded-md mt-3 mb-3" onClick={addItem}>+ Add Plan</div>

            <div className="flex gap-2">
              <Button
                className={
                  "border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
                }
                text={"Back"}
                onClick={prevStep}
              />
              <Button
                type={"submit"}
                className={
                  "border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
                }
                text={loading ? "Loading..." : "Next"}
              />
        </div>
      </form>
  )
}

export default ServicePlan