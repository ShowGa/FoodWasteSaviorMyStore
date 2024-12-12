import React, { useState, useRef } from "react";
// react icon
import { RiMapPin2Fill } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";
// zustand
import useRegFormStore from "../../zustand/useRegFormStore";
// service
import MapService from "../../service/mapService";

// list of address component
const AddressList = () => {
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
  // useState
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  // useRef
  const timeOutId = useRef(null);

  // zustand
  const { formData, setFormData } = useRegFormStore();

  console.log(formData);

  // =========================== //
  //      Helper Function
  // =========================== //
  const handleInputChangeAndSearch = (e) => {
    const inputValue = e.target.value;
    const encodeAddress = encodeURIComponent(inputValue);
    setQuery(inputValue);

    // check input value length
    if (inputValue.length < 2) {
      setResults([]);
      console.log("input value length is less than 1");
      return;
    }

    // clear timeout if it exists
    if (timeOutId.current) {
      clearTimeout(timeOutId.current);
    }

    // set timeout to fetch data
    timeOutId.current = setTimeout(() => {
      MapService.getCompleteLocation(encodeAddress)
        .then((response) => {
          console.log(response.data.features);
          setResults(response.data.features);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 1000);
  };

  const handleSelectSuggestion = (place) => {
    setQuery(place.matching_place_name);
    setResults([]);
    console.log("Selected place:", place);
  };

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
