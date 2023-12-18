import Button from '@/Component/Button';
import { InputForm } from '@/Component/Input';
import React, { useState } from 'react'
import { CiImageOn } from 'react-icons/ci';
import { IoIosRemoveCircleOutline } from 'react-icons/io';
import { MdOutlineSubtitles, MdOutlineTextFields } from 'react-icons/md';

const ServiceFaq = ({nextStep , prevStep}) => {
    const [serviceFaqs, setServiceFaqs] = useState([
        { heading: "", description: "", file: null },
      ]);
    
      // Function to add a new FAQ
      const addServiceFaq = () => {
        setServiceFaqs([...serviceFaqs, { heading: "", description: "", file: null }]);
      };
    
      // Function to remove an existing FAQ
      const removeServiceFaq = (index) => {
        setServiceFaqs(serviceFaqs.filter((_, i) => i !== index));
      };
  return (
    <form>
        {serviceFaqs.map((faq, index) => (
          <div key={index} className="border rounded p-4 space-y-4">
            <div className="flex justify-between items-center ">
              <span className="font-medium">Service FAQ {index + 1}</span>
              {serviceFaqs.length > 1 && (
                <IoIosRemoveCircleOutline
                  size={20}
                  onClick={() => removeServiceFaq(index)}
                />
              )}
            </div>
            <InputForm
              type="file"
              name="file"
              InputIcon={<CiImageOn size={25} />}
            //   onChange={(e) => handleImageChange(index, e)}
            />
            <InputForm
              placeholder="Heading"
              InputIcon={<MdOutlineSubtitles size={25} />}
              name="heading"
            //   onChange={(e) => handleChange(index, e)}
            //   value={faq.heading}
            />
            <InputForm
              placeholder="Description"
              InputIcon={<MdOutlineTextFields size={25} />}
              name="description"
            //   onChange={(e) => handleChange(index, e)}
            //   value={faq.description}
            />
          </div>
        ))}
        <div className='p-2 cursor-pointer'  onClick={addServiceFaq}>+ Add Service FAQ</div>

        <div className="flex gap-2">
          <Button
            onClick={prevStep}
            className="border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
            text="Back"
          />
          <Button
            type="submit"
            className="border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
            text="Submit"
          />
        </div>
  </form>
  )
}

export default ServiceFaq