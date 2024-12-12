import React, { useState, useRef } from "react";
// react icon
import { RiMapPin2Fill } from "react-icons/ri";
import { FaShop } from "react-icons/fa6";
// zustand
import useRegFormStore from "../../zustand/useRegFormStore";
// service
import MapService from "../../service/mapService";

// list of address component
const AddressList = ({
  result,
  handleSelectSuggestion,
  handleAddressReversedArray,
}) => {
  return (
    <li
      key={result.id}
      className="flex items-center gap-4 px-4 py-3"
      onClick={() => handleSelectSuggestion(result)}
    >
      <div className="p-3 bg-gray-100 rounded-full">
        <FaShop className="text-lg text-black" />
      </div>
      <div className="leading-5">
        <p>{result.text}</p>
        <p>
          {handleAddressReversedArray(
            result.matching_place_name || result.place_name
          )}
        </p>
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
      clearTimeout(timeOutId.current);
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
          setResults(response.data.features);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 1000);
  };

  // for select suggestion use
  const handleSelectSuggestion = (resultInfo) => {
    // get reverse address array
    const reverseAddressArray = handleAddressReversedArray(
      resultInfo.matching_place_name || resultInfo.place_name
    );

    // extract address detail
    const addressDetail = reverseAddressArray
      .filter((_, index) => index !== 0 && index !== 3)
      .join("");
    const country = reverseAddressArray?.[0] || "";
    const city = reverseAddressArray?.[1] || "";
    const postalCode = reverseAddressArray?.[3] || undefined;

    // show address in input
    setQuery(addressDetail);

    // clear suggestion list
    setResults([]);

    // set form data
    setFormData({
      ...formData,
      addressDetail,
      country,
      city,
      postalCode,
      latitude: resultInfo.center[1],
      longitude: resultInfo.center[0],
    });
  };

  // address detail dealing => reverse the address => array
  const handleAddressReversedArray = (address) => {
    const reversedAddress = address.split(", ").reverse();

    return reversedAddress;
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
              value={query}
              onChange={handleInputChangeAndSearch}
              className="flex-1 focus:outline-none"
              type="text"
              placeholder="範例:台北市信義區信義路五段"
            />
          </div>
          {results.length > 0 && (
            <ul className="pt-4 rounded-b-2xl bg-white">
              {results.map((result) => (
                <AddressList
                  result={result}
                  handleSelectSuggestion={handleSelectSuggestion}
                  handleAddressReversedArray={handleAddressReversedArray}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Step1;
