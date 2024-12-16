import React, { useState, useEffect } from "react";
// zustand
import useRegFormStore from "../../zustand/useRegFormStore";
// react map gl
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
// react icons
import { RiMapPin2Fill } from "react-icons/ri";
import { FaShoppingBag } from "react-icons/fa";
// css
import "../css/component.css";

const Step3 = ({ setAllowNextStep }) => {
  const { formData, setFormData } = useRegFormStore();
  const [viewState, setViewState] = useState({
    longitude: formData.longitude ? formData.longitude : 121.5654,
    latitude: formData.latitude ? formData.latitude : 25.033,
    zoom: 14,
  });
  // onMoving state
  const [onMoving, setOnMoving] = useState(false);

  // ============= helper function ============= //

  useEffect(() => {
    setAllowNextStep(true);

    return () => {
      setAllowNextStep(false);
    };
  }, []);

  return (
    <>
      <h2 className="text-3xl">請查看您的商店標記是否正確</h2>
      <span className="text-md text-gray-400">幫助我們更快的找到您的愛店</span>

      <div className="w-full h-[25rem] rounded-2xl mt-10 bg-gray-200 relative">
        <Map
          {...viewState}
          onMove={(evt) => {
            setViewState(evt.viewState);
            setOnMoving(true);
            setFormData({
              ...formData,
              longitude: evt.viewState.longitude,
              latitude: evt.viewState.latitude,
            });
          }}
          onMoveEnd={() => {
            setOnMoving(false);
          }}
          style={{ width: "100%", height: "100%" }}
          mapStyle="mapbox://styles/mapbox/streets-v11"
          mapboxAccessToken={import.meta.env.VITE_MAPBOX_API_KEY}
        ></Map>

        <div className="map-pin-icon-container">
          <div className={`map-pin-icon ${onMoving ? "icon-drag-effect" : ""}`}>
            <RiMapPin2Fill className="text-4xl text-red-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Step3;
