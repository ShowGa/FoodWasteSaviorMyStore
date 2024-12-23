import React, { useState, useEffect } from "react";
// toast
import toast from "react-hot-toast";

// components
import WaitingOrderCard from "../components/WaitingOrderCard";

// service
import OrderService from "../service/orderService";

const PendingOrders = () => {
  const [waitingOrderList, setWaitingOrderList] = useState([]);

  const getWaitingOrderList = () => {
    OrderService.getWaitingOrderList()
      .then((res) => {
        setWaitingOrderList(res.data.data);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  useEffect(() => {
    getWaitingOrderList();
  }, []);

  return (
    <section className="w-full">
      <div className="px-28 py-20">
        <h1 className="text-3xl font-semibold">待確認訂單</h1>

        <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
          <h2 className="border-b border-gray-200 px-6 pt-6 pb-4 text-2xl font-semibold">
            今日待確認訂單
          </h2>

          <div className="flex flex-wrap gap-4 pb-6 px-6">
            {waitingOrderList?.map((order) => (
              <WaitingOrderCard key={order.id} order={order} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PendingOrders;
