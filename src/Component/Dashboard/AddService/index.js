
import React, {useState } from "react";
import ShowCategory from "../ShowCategory";
import ServiceInfo from "../ServiceInfo";
import ServiceTab from "../ServiceTab";
import ServicePlan from "../SerivcePlan";
import ServiceFaq from "../ServiceFaq";

const AddService = () => {
    const [step, setStep] = useState(1);
    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);
  return (
        <div >
          {step === 1 && (
            <ShowCategory nextStep={nextStep}/>
          )}
          {step === 2 && (
            <ServiceInfo nextStep={nextStep} prevStep={prevStep} />
          )}
          {step === 3 && (
            <ServiceTab nextStep={nextStep} prevStep={prevStep}/>
          )}
          {step === 4 && (
            <ServicePlan nextStep={nextStep} prevStep={prevStep}/>
          )}
          {step === 5 && (
            <ServiceFaq nextStep={nextStep} prevStep={prevStep}/>
          )}
        </div>
  );
};


export default AddService;