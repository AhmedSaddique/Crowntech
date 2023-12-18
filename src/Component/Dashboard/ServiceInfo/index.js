import Button from '@/Component/Button'
import { InputForm } from '@/Component/Input'
import React from 'react'
import { CiImageOn } from 'react-icons/ci'
import { MdOutlineSubtitles, MdOutlineTextFields } from 'react-icons/md'

const ServiceInfo = ({nextStep , prevStep}) => {
  return (
    <form
    //  onSubmit={handleSubmit}
     >
    <InputForm
      type="file"
      name={"serviceImage"}
      InputIcon={<CiImageOn size={25} />}
    //   onChange={handleImageChange}
    />
    <InputForm
      placeholder={"Title"}
      InputIcon={<MdOutlineSubtitles size={25} />}
      name={"serviceName"}
    //   onChange={handleChange}
    //   value={serviceData.serviceName}
    />
    <InputForm
      placeholder={"Text"}
      InputIcon={<MdOutlineTextFields size={25} />}
      name={"serviceText"}
    //   onChange={handleChange}
    //   value={serviceData.serviceText}
    />

    <div className="flex gap-2">
      <Button
        onClick={prevStep}
        className={
          "border-none w-full justify-center px-4 py-2 bg-gradient-to-r from-primary-btn1 hover:from-primary-btn3 via-primary-btn2 to-primary-btn3 hover:to-primary-btn1 text-primary-white transition duration-400 shadow-md"
        }
        text={"Back"}
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

export default ServiceInfo