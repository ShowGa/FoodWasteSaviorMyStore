import React from "react";
// zustand
import useRegFormStore from "../../zustand/useRegFormStore";

const Step3 = () => {
  const { formData } = useRegFormStore();

  // ============= helper function ============= //
  const handleTestForm = () => {
    console.log(formData);
  };

  return (
    <>
      <h2 className="text-3xl">請查看您的商店標記是否正確</h2>
      <span className="text-md text-gray-400">幫助我們更快的找到您的愛店</span>

      <div className="w-full h-[25rem] rounded-2xl mt-10 bg-gray-200">
        <button onClick={handleTestForm}>test form</button>
      </div>
    </>
  );
};

export default Step3;
