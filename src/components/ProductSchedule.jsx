import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// Services
import PackageService from "../service/packageService";

// Components
import ProductScheduleFilter from "./ProductScheduleFilter";

// date in week
const dateInWeek = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];

const ProductSchedule = () => {
  const { packageId } = useParams();
  // Schedule => get posted form data from backend
  const [postedSchedules, setPostedSchedules] = useState([]);
  console.log(postedSchedules);

  // ===================== //
  // Helper functions
  // ===================== //

  const handleGetPackageSchedule = async () => {
    PackageService.getPackageSchedule(packageId)
      .then((res) => {
        const responseData = res.data.data;
        setPostedSchedules(responseData);
        console.log(responseData);
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
    handleGetPackageSchedule();
  }, []);

  return (
    <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
      <div className="border-b border-gray-200 px-6 pt-6 pb-4">
        <h2 className="mb-2 text-2xl font-semibold">銷售排程</h2>
        <p className="">- 根據店家休息時間，調整是否開放預訂。</p>
        <p className="">- 根據商品的剩餘情況，調整數量。</p>
        <p className="">
          - 設定商品的預計銷售時間，讓顧客知道何時可以收到商品。
        </p>
      </div>

      <div className="flex flex-col gap-8 pb-6 px-6">
        {postedSchedules.map((schedule, index) => (
          <ProductScheduleFilter
            key={schedule.rulesId}
            schedule={schedule}
            weekday={dateInWeek[schedule.weekday]}
            setPostedSchedules={setPostedSchedules}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSchedule;
