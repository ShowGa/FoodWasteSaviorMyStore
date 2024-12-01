import React from "react";
// Components
import ProductScheduleFilter from "./ProductScheduleFilter";

// date in week
const dateInWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const ProductSchedule = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
      <div className="border-b border-gray-200 px-6 pt-6 pb-4">
        <h2 className="mb-2 text-2xl font-semibold">商品資訊</h2>
        <p className="">根據店家休息時間，調整是否開放預訂。</p>
        <p className="">設定商品的預計銷售時間，讓顧客知道何時可以收到商品。</p>
        <p className="">根據商品的剩餘情況，調整數量。</p>
      </div>

      <div className="flex flex-col gap-8 pb-6 px-6">
        {dateInWeek.map((date) => (
          <ProductScheduleFilter dateInWeek={date} />
        ))}
      </div>
    </div>
  );
};

export default ProductSchedule;
