"use client";
import React, { useState } from "react";
import DashboardProvider from "@/Component/DashboardProvider";
import { InputForm } from "@/Component/Input";

const Dashboard = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <DashboardProvider>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          {step === 1 && (
            <>
              <h2>Step 1: Personal Information</h2>
              <InputForm label="Name" type="text" />
              <InputForm label="Email" type="email" />
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </>
          )}
          {step === 2 && (
            <>
              <h2>Step 2: Contact Information</h2>
              <InputForm label="Phone" type="tel" />
              <InputForm label="Address" type="text" />
              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <h2>Step 3: Education</h2>
              <InputForm label="School" type="text" />
              <InputForm label="Degree" type="text" />
              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </>
          )}
          {step === 4 && (
            <>
              <h2>Step 4: Work Experience</h2>
              <InputForm label="Company" type="text" />
              <InputForm label="Position" type="text" />
              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="button" onClick={nextStep}>
                Next
              </button>
            </>
          )}
          {step === 5 && (
            <>
              <h2>Step 5: Additional Information</h2>
              <InputForm label="Additional Info" type="text" />
              <button type="button" onClick={prevStep}>
                Previous
              </button>
              <button type="submit">Submit</button>
            </>
          )}
        </form>
      </div>
    </DashboardProvider>
  );
};

export default Dashboard;
