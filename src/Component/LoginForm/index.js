"use client"
import React, { useState } from 'react'
import { HeadingH1 } from '../Heading'
import { Para14 } from '../ParaGraph'
import { InputForm } from '../Input'
import { AiFillEye, AiFillGithub, AiOutlineCheck, AiOutlineUser } from 'react-icons/ai'
import Button from '../Button'
import Link from 'next/link'
import Container from '../Container'
import { FcGoogle } from 'react-icons/fc'

const LoginForm = () => {

    const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Container className={'pt-10 backdrop-blur-3xl'}>
 <div className=' max-w-lg  sm:w-4/6 mx-auto '>
        <form className='text-center p-8 space-y-4 border-2 rounded-2xl shadow-lg'>
        <HeadingH1 title={"Welcome back"}/>
        <Para14 title={"Fill your email address and password to sign in."}/>
        <InputForm
         
        placeholder={"Username"}
        InputIcon={<AiOutlineUser size={25}/>}
        />
        <InputForm 
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={"Pssword"}
        InputIcon={<AiFillEye size={25} type="checkbox" onClick={togglePasswordVisibility}
        checked={showPassword}/>}
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
        
        <Button className={"border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"} text={"Login"}/>
        <div className='flex'>
        <b >Don’t have an account? <span className='border-b-2 border-primary-gray400' ><Link href="/signup">Sign Up</Link></span></b>
        </div>
        <div>
        <b className='mt-10'>Or SignUp With</b>
        <div className='flex gap-5 justify-center mt-3'>
          <Button  className='border p-2 rounded-md hover:bg-blue-100' text={<FcGoogle size={25}/>}/>
          <Button  className='border p-2 rounded-md hover:bg-blue-100 text-black' text={<AiFillGithub size={25}/>}/>
        </div>
        </div>
        </form>
    </div>
    </Container>
   
  )
}

export default LoginForm