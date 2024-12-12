import React from "react";
// react icon
import { RiMapPin2Fill } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";

// list of address component
const AddressList = ({ formData, setFormData }) => {
  return (
    <li className="flex items-center gap-4 px-4 py-3">
      <div className="p-3 bg-gray-100 rounded-full">
        <FaShop className="text-lg text-black" />
      </div>
      <div className="leading-5">
        <p>店面地址</p>
        <p>台北市大安區</p>
      </div>
    </li>
  );
};

const Step1 = () => {
  return (
    <>
      <h2 className="text-3xl">請告訴我們您的愛店大致位置</h2>
      <span className="text-md text-gray-400">透過地圖讓顧客快速找到您</span>
      <div className="w-full h-[25rem] bg-gray-200 rounded-2xl mt-10 relative">
        <div>map</div>
        <div className="mx-auto w-[90%] absolute top-[7%] left-0 right-0">
          <div className="px-4 py-5 h-full rounded-t-2xl flex items-center justify-center gap-2 bg-white">
            {/* create a location icon */}
            <RiMapPin2Fill className="text-2xl text-black" />
            <input
              className="flex-1 focus:outline-none"
              type="text"
              placeholder="請輸入地址"
            />
          </div>
          <ul className="pt-4 rounded-b-2xl bg-white">
            <AddressList />
            <AddressList />
            <AddressList />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Step1;
