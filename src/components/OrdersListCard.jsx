import React from "react";
// assets
import { img1 } from "../assets";

const OrdersListCard = ({ order }) => {
  return (
    <div className="flex-shrink-0 border border-gray-200 rounded-md w-[20rem] shadow-sm overflow-hidden">
      <div className="w-full h-32">
        <img
          src={order.packageCoverImageUrl}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 py-4 bg-white">
        <h3 className="text-primary text-lg font-semibold">
          {order.orderConfirmCode}
        </h3>
        <div className="flex flex-col mt-2">
          <p className="text-sm text-gray-500">{order.packageName}</p>
          <p className="text-xl text-gray-500">x {order.orderQuantity}</p>
        </div>
      </div>
    </div>
  );
};

export default OrdersListCard;
