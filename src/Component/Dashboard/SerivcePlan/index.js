import Button from '@/Component/Button';
import { InputForm } from '@/Component/Input';
import React, { useState } from 'react'
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { MdOutlineSubtitles } from 'react-icons/md';

const ServicePlan = ({nextStep , prevStep}) => {
    const [items, setItems] = useState([
        {
          title: "",
          text: "",
          price: "",
          chooseplan: "",
          description: "",
          feature: [{ option: "" }],
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
  return (
    <form 
    // onSubmit={handleSubmit}
    >
            {items.map((item, itemIndex) => (
              <div key={itemIndex} className="border rounded p-4 space-y-4">
                <div className="flex justify-between items-center ">
                  <span className="font-medium">Add Plan {itemIndex + 1}</span>
                  <IoIosRemoveCircleOutline
                    size={20}
                    onClick={() => removeItem(itemIndex)}
                  />
                </div>
                <InputForm
                //   onChange={(e) => handleChange(itemIndex, undefined, e)}
                  type="text"
                  placeholder={"Plan Name"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"title"}
                //   value={item.title}
                />
                <InputForm
                //   onChange={(e) => handleChange(itemIndex, undefined, e)}
                  placeholder={"Plan text"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"text"}
                //   value={item.text}
                />
                <InputForm
                type="number"
                //   onChange={(e) => handleChange(itemIndex, undefined, e)}
                  placeholder={"Plan Price"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"price"}
                //   value={item.price}
                />
                <InputForm
                //   onChange={(e) => handleChange(itemIndex, undefined, e)}
                  placeholder={"Plan Url"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"chooseplan"}
                //   value={item.chooseplan}
                />
                <InputForm
                //   onChange={(e) => handleChange(itemIndex, undefined, e)}
                  placeholder={"Plan Description"}
                  InputIcon={<MdOutlineSubtitles size={25} />}
                  name={"description"}
                //   value={item.description}
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
                        // onChange={(e) => handleChange(itemIndex, subIndex, e)}
                        placeholder={"Plan Features"}
                        InputIcon={<MdOutlineSubtitles size={25} />}
                        name={"option"}
                        // value={subItem.option}
                      />
                    </div>
                  ))}
                  <div className='p-2 cursor-pointer' onClick={() => addSubItem(itemIndex)}>
                    + Add Features
                  </div>
                </div>
              </div>
            ))}
            <div className='p-2 cursor-pointer' onClick={addItem}>+ Add Plan</div>

            <div className="flex gap-2">
              <Button
                className={
                  "border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
                }
                text={"Back"}
                onClick={prevStep}
              />
              <Button
                onClick={nextStep}
                type={"submit"}
                className={
                  "border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
                }
                text={"Next"}
              />
        </div>
      </form>
  )
}

export default ServicePlan