import React from "react";
// components
import OrdersListCard from "../components/OrdersListCard";

const Orders = () => {
  return (
    <section className="w-full">
      <div className="px-28 py-20">
        <h1 className="text-3xl font-semibold">John的店舖</h1>

        <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
          <h2 className="border-b border-gray-200 px-6 pt-6 pb-4 text-2xl font-semibold">
            顧客訂單資訊
          </h2>

          <div className="flex flex-wrap gap-4 pb-6 px-6">
            <OrdersListCard />
            <OrdersListCard />
            <OrdersListCard />
            <OrdersListCard />
            <OrdersListCard />
            <OrdersListCard />
            <OrdersListCard />
            <OrdersListCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Orders;
