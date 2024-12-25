import React, { useState, useEffect } from "react";
// components
import OrdersListCard from "../components/OrdersListCard";
// service
import OrderService from "../service/orderService";

const Orders = () => {
  const [confirmedOrderList, setConfirmedOrderList] = useState([]);

  const getConfirmedOrderList = () => {
    OrderService.getConfirmedOrderList()
      .then((res) => {
        setConfirmedOrderList(res.data.data);
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
    getConfirmedOrderList();
  }, []);

  return (
    <section className="w-full">
      <div className="px-28 py-20">
        <h1 className="text-3xl font-semibold">已確認訂單</h1>

        <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
          <h2 className="border-b border-gray-200 px-6 pt-6 pb-4 text-2xl font-semibold">
            顧客訂單資訊
          </h2>

          <div className="flex flex-wrap gap-4 pb-6 px-6">
            {confirmedOrderList.length > 0 ? (
              confirmedOrderList.map((order) => (
                <OrdersListCard key={order.id} order={order} />
              ))
            ) : (
              <p className="text-center text-gray-500">目前沒有任何訂單</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
