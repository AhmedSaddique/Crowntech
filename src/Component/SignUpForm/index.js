"use client"
import React, { useState } from 'react'
import { HeadingH1 } from '../Heading'
import { Para14 } from '../ParaGraph'
import { InputForm } from '../Input'
import Button from '../Button'
import { AiFillEye, AiFillGithub, AiFillIdcard, AiOutlineCheck, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'
import Link from 'next/link'
import Container from '../Container'
import { FcGoogle } from 'react-icons/fc'

const SignUpForm = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container>
          <div className='pt-10 max-w-lg p-3 sm:w-4/6 mx-auto '>
        <div className='text-center p-8 space-y-4 border-2 rounded-2xl shadow-lg '>
        <HeadingH1 title={"Create an account"}/>
        <Para14 title={"Create an account today and start using our platform"}/>
        <InputForm 
        placeholder={"Your Name"}
        InputIcon={<AiFillIdcard size={25}/>}
        />
         <InputForm 
        placeholder={"Phone"}
        InputIcon={<AiOutlinePhone size={25}/>}
        />
        <InputForm 
        placeholder={"Username"}
        InputIcon={<AiOutlineUser size={25}/>}
        />
         <InputForm 
        placeholder={"Email"}
        InputIcon={<AiOutlineMail size={25}/>}
        />
        <InputForm 
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"Pssword"}
        InputIcon={<AiFillEye size={25} type="checkbox"
        onClick={togglePasswordVisibility}
        checked={showPassword} />}
        />
       <div class="flex items-center">
        <input type="checkbox" id="customCheckbox" class="hidden"/>
        <label for="customCheckbox" class="flex items-center cursor-pointer select-none">
        <div class="w-6 h-6 border border-gray-300 rounded-md flex items-center justify-center transition-all">
          <AiOutlineCheck className='text-transparent fill-current '/>
        </div>
      </label>
        <span class="ml-2">Remember Me</span>
        </div>
        <Button className={"border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"} text={"Sign Up"}/>
         <div className='flex'>
        <b>Alrady have a account ! <span className='border-b border-primary-gray400' ><Link href="/login">Login</Link></span></b>
        </div>
        
        </div>
    </div>
    </Container>


  )
}

export default SignUpForm