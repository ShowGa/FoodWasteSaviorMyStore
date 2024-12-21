import React, { useState } from "react";
// service
import orderService from "../service/orderService";
// react-hot-toast
import toast from "react-hot-toast";

const WaitingOrderCard = ({ order }) => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleConfirmOrder = () => {
    orderService
      .confirmOrder(order.orderId)
      .then((response) => {
        toast.success("訂單接受成功!");
        setIsAccepted(true);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

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

        <button
          className={`w-full bg-primary text-white py-2 rounded-full mt-4  transition-all duration-300 ${
            isAccepted ? "bg-gray-500" : "hover:bg-primaryHover"
          }`}
          onClick={handleConfirmOrder}
        >
          {isAccepted ? "已接受" : "確認訂單"}
        </button>
      </div>
    </div>
  );
};

export default WaitingOrderCard;
