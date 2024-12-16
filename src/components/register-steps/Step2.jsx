import React, { useState, useEffect } from "react";
// mui
import { TextField } from "@mui/material";
// zustand
import useRegFormStore from "../../zustand/useRegFormStore";
// MapService
import MapService from "../../service/mapService";
// react-hot-toast
import toast from "react-hot-toast";
// react map gl
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// icons
import { RiMapPin2Fill } from "react-icons/ri";

// create a custom text field style
const customTextFieldMiddle = {
  className: "w-full",
  variant: "filled",
  // disable the underline
  sx: {
    "& .MuiFilledInput-root": {
      backgroundColor: "transparent",
      border: "1px solid rgb(200, 200, 200)",
      borderBottom: "none",
      borderRadius: "0",
    },
    "& .MuiInputBase-root:after": {
      display: "none",
    },
    "& .MuiInputBase-root:before": {
      display: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgb(200, 200, 200)",
    },
  },
};
const customTextFieldTop = {
  className: "w-full",
  variant: "filled",
  sx: {
    "& .MuiFilledInput-root": {
      backgroundColor: "transparent",
      border: "1px solid rgb(200, 200, 200)",
      borderBottom: "none",
      borderTopLeftRadius: "10px",
      borderTopRightRadius: "10px",
    },
    "& .MuiInputBase-root:after": {
      display: "none",
    },
    "& .MuiInputBase-root:before": {
      display: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgb(200, 200, 200)",
    },
  },
};
const customTextFieldBottom = {
  className: "w-full",
  variant: "filled",
  sx: {
    "& .MuiFilledInput-root": {
      backgroundColor: "transparent",
      border: "1px solid rgb(200, 200, 200)",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
      borderBottomLeftRadius: "10px",
      borderBottomRightRadius: "10px",
    },
    "& .MuiInputBase-root:after": {
      display: "none",
    },
    "& .MuiInputBase-root:before": {
      display: "none",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "rgb(200, 200, 200)",
    },
  },
};

const Step2 = ({ setAllowNextStep }) => {
  const [isChangeAddress, setIsChangeAddress] = useState(false);
  // zustand
  const { formData, setFormData } = useRegFormStore();
  // useState
  const [addressInputValue, setAddressInputValue] = useState({
    postalCode: undefined,
    city: "",
    town: "",
    street: "",
    floor: "",
  });
  const [viewState, setViewState] = useState({
    longitude: formData.longitude ? formData.longitude : 121.5654,
    latitude: formData.latitude ? formData.latitude : 25.033,
    zoom: 14,
  });

  // handle input change
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAddressInputValue((prev) => ({ ...prev, [id]: value }));
    setIsChangeAddress(true);
  };

  // ============= helper function ============= //
  const handleMapClick = () => {
    // check if address input value is changed
    if (!isChangeAddress) {
      toast.error("請先填寫或更改地址!");
      return;
    }

    const { postalCode, city, town, street } = addressInputValue;
    if (!postalCode || !city || !town || !street) {
      // react-hot-toast
      toast.error("請填寫所有必填字段(*)");
      return;
    }

    const address = `${addressInputValue.postalCode}${addressInputValue.city}${addressInputValue.town}${addressInputValue.street}`;
    const addressForFormData = `${addressInputValue.city}${addressInputValue.town}${addressInputValue.street}${addressInputValue.floor}`;

    MapService.getCompleteLocation(address)
      .then((res) => {
        const mapData = res.data.features;
        // check if mapData is empty
        if (mapData.length === 0) {
          toast.error("糟糕!我們無法找到您的地址，請重新輸入或稍後在試!");
          return;
        }
        toast.success("成功找到您的地址定位");
        // set map data to formData
        setFormData({
          ...formData,
          addressDetail: addressForFormData,
          country: "台灣",
          city: addressInputValue.city,
          postalCode: addressInputValue.postalCode,
          latitude: mapData[0].center[1],
          longitude: mapData[0].center[0],
        });
        // set view state
        setViewState({
          ...viewState,
          longitude: mapData[0].center[0],
          latitude: mapData[0].center[1],
        });
        // allow next step after getting map data
        setAllowNextStep(true);
        setIsChangeAddress(false);
      })
      .catch((err) => {
        console.log(err);
        // react-hot-toast
        toast.error("糟糕!我們無法找到您的地址，請重新輸入或稍後在試!");
      });
  };

  return (
    <>
      <h2 className="text-3xl">請告訴我們您的愛店地址</h2>
      <span className="text-md text-gray-400">透過地圖讓顧客快速找到您</span>

      <div className="w-full h-[25rem] rounded-2xl mt-10">
        <form onChange={handleInputChange}>
          <TextField
            {...customTextFieldTop}
            id="postalCode"
            label="郵遞區號"
            type="number"
            required
            defaultValue={formData.postalCode}
          />
          <TextField
            {...customTextFieldMiddle}
            id="city"
            label="縣市"
            required
            defaultValue={formData.city}
          />
          <TextField
            {...customTextFieldMiddle}
            id="town"
            label="鄉鎮市區"
            required
          />
          <TextField
            {...customTextFieldMiddle}
            id="street"
            label="街道、巷弄、路段、號碼"
            required
          />
          <TextField {...customTextFieldBottom} id="floor" label="樓層" />
        </form>

        {/* button */}
        <div className="flex justify-center mt-10">
          <button
            className="rounded-md w-[50%] h-10 text-white bg-secondaryTheme hover:bg-secondaryThemeHover"
            onClick={handleMapClick}
          >
            點擊地圖定位
          </button>
        </div>

        <div className="w-full h-[25rem] rounded-2xl mt-5 bg-gray-200 pointer-events-none overflow-hidden relative">
          <Map
            {...viewState}
            onMove={(evt) => setViewState(evt.viewState)}
            style={{ width: "100%", height: "100%" }}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_KEY}
          >
            <Marker
              longitude={formData.longitude ? formData.longitude : 121.5654}
              latitude={formData.latitude ? formData.latitude : 25.033}
              anchor="center"
            >
              <div style={{ color: "red" }}>
                <RiMapPin2Fill className="text-4xl" />
              </div>
            </Marker>
          </Map>
        </div>
      </div>
    </>
  );
};

export default Step2;
