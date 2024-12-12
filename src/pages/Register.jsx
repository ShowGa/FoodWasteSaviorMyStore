import React, { useState } from "react";
// images
import { img3 } from "../assets";
// components
import Step1 from "../components/register-steps/Step1";
import Step2 from "../components/register-steps/Step2";
import Step3 from "../components/register-steps/Step3";
import RegisterStep from "../components/register-steps/RegisterStep";
// progress bar
import { ProgressBar } from "react-step-progress-bar";
import "react-step-progress-bar/styles.css";
// css
import "../pages/css/pageCss.css";

const Register = () => {
  const [step, setStep] = useState(1);

  const calculatePercentage = () => {
    return (step / 3) * 100;
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };
  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <main>
      {/* logo */}
      <div className="absolute top-5 right-10 z-50">
        {/* <img src={logo} alt="logo" /> */}
        <h1 className="text-3xl font-extrabold">Logo</h1>
      </div>

      <div className="flex h-screen">
        {/* Image Container */}
        <section className="flex-1 max-md:hidden">
          <div className="p-img_container">
            <img src={img3} alt="handsome man" />
          </div>
        </section>

        {/* Form Container */}
        <section className="flex justify-center items-center flex-1 h-full relative">
          <div className="scroll-hidden w-full max-w-[35rem] relative overflow-y-scroll">
            {/* {step === 1 && <Step1 />} */}
            {step === 1 && <Step2 />}
            {step === 2 && <Step3 />}
            {step === 3 && <RegisterStep />}
          </div>

          <footer className="absolute bottom-0 left-0 w-full px-7 pb-7">
            {/* create progress bar for the step */}
            <div className="mb-5">
              <ProgressBar
                height={5}
                percent={calculatePercentage()}
                filledBackground="linear-gradient(135deg, rgba(239,14,6,1) 0%, rgba(227,207,7,1) 100%)"
              ></ProgressBar>
            </div>

            <div className="flex justify-between items-center">
              <button
                className="border border-gray-300 rounded-md px-4 py-2"
                // forbid the button when step is 1
                style={{
                  cursor: step === 1 ? "not-allowed" : "pointer",
                }}
                disabled={step === 1}
                onClick={handlePrevStep}
              >
                上一步
              </button>
              <button
                className="border border-gray-300 rounded-md px-4 py-2"
                // forbid the button when step is 4
                style={{
                  cursor: step === 3 ? "not-allowed" : "pointer",
                }}
                disabled={step === 3}
                onClick={handleNextStep}
              >
                確認
              </button>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
};

export default Register;
