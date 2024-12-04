import React from "react";
// assets
import { img1 } from "../assets";

const OrdersListCard = () => {
  return (
    <div className="flex-shrink-0 border border-gray-200 rounded-md w-[20rem] shadow-sm overflow-hidden">
      <div className="w-full h-32">
        <img src={img1} alt="product" className="w-full h-full object-cover" />
      </div>
      <div className="px-6 py-4 bg-white">
        <h3 className="text-primary text-lg font-semibold">756a5f2211s2f3</h3>
        <div className="flex flex-col mt-2">
          <p className="text-sm text-gray-500">Suprise Bag</p>
          <p className="text-sm text-gray-500">x 1</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersListCard;
