import React from 'react'
import { HeadingH2, HeadingH4, HeadingH6 } from '../Heading'
import { Para14, Para16 } from '../ParaGraph'
import { Contactdata } from '../Constants'
import { Commentarea, InputForm } from '../Input'
import { AiOutlineHome, AiOutlineMail, AiOutlinePhone, AiOutlineUser } from 'react-icons/ai'
import Button from '../Button'
import { MdSubject } from 'react-icons/md'
import Container from '../Container'


const ContactForm = () => {
    return (
        <>
<Container>
<div className='grid grid-cols-1 md:grid-cols-2 gap-5 pt-20 pb-20'>
                <div className='space-y-3 pb-10'>
                    <HeadingH2 title={"Get in touch"} />
                    <Para14 title={"Do you want to know more or contact our sales department?"} />
                    {
                        Contactdata.map((array, index) => (
                            <div key={index}>
                                <div className='flex hover:scale-105 duration-300 transition'>
                                    <div className='w-1/12'>
                                        {array.icon}
                                    </div>
                                    <div className='pt-8 w-11/12'>
                                        <HeadingH6 title={array.title} />
                                        <Para16 title={array.para} />
                                    </div>
                                </div>

                            </div>

                        ))
                    }
                </div>

                <div className=' shadow-lg  rounded-xl p-4'>
                    <div className='grid grid-cols-2 gap-2'>
                        <div>
                            <InputForm
                                type={'text'}
                                placeholder={"Your Name"}
                                InputIcon={<AiOutlineUser size={25} />}
                            />
                        </div>
                        <div>
                            <InputForm
                                type={'email'}
                                placeholder={"Email"}
                                InputIcon={<AiOutlineMail size={25} />}
                            />
                        </div>
                        <div>
                            <InputForm
                                type={'number'}
                                placeholder={"Phone Number"}
                                InputIcon={<AiOutlinePhone size={25} />}
                            />
                        </div>
                        <div>
                            <InputForm
                                type={'text'}
                                placeholder={"Company"}
                                InputIcon={<AiOutlineHome size={25} />}
                            />
                        </div>
                    </div>
                    <div>
                            <InputForm
                                type={'text'}
                                placeholder={"Subject"}
                                InputIcon={<MdSubject size={25} />}
                            />
                        </div>
                        <Commentarea/>
                        <Button className='border-none px-4 py-2 mt-5 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md' text={"Submit"}/>



                </div>
            </div>
</Container>
           

        </>
    )
}

export default ContactForm