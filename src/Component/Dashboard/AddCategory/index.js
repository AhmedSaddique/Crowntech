import Button from '@/Component/Button'
import { InputForm } from '@/Component/Input'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiOutlineUser } from 'react-icons/ai'

const AddCategory = () => {
    const router = new useRouter();
    const [categoryData, setcategoryData] = useState({
      catName:'',
    });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('/api/servicecategory' ,categoryData)
          console.log(response.data);
          router.push('/dashboard/service')
          
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setcategoryData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    };
  return (
        <form className='' onSubmit={handleSubmit}>
        <InputForm
        placeholder={"AddCategory"}
        InputIcon={<AiOutlineUser size={25}/>}
        name={'catName'}
        value={categoryData.catName}
        onChange={handleChange}
        />
        <Button type={'submit'}  className={"border-none  justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"} text={"Submit"}/>
        </form>
  )
}

export default AddCategory