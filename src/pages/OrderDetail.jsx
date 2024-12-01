import React from "react";
// assets
import { img1 } from "../assets";
// icons
import { IoLocationOutline } from "react-icons/io5";
import { FaCheckCircle } from "react-icons/fa";

const OrderDetail = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 px-28 py-20">
        <h1 className="text-4xl font-bold mb-4">Order Detail</h1>

        <div className="rounded-lg max-w-[30rem] w-full bg-secondaryThemeHover pt-[0.3rem] px-[0.3rem]">
          <div className="py-[1rem] px-[1.75rem] border border-gray-300 rounded-lg bg-white">
            {/* orderID Information */}
            <div className="flex gap-4 mb-7">
              <div>
                <p className="font-bold text-gray-400">Order ID</p>
                <p className="text-xl font-semibold text-primary">
                  1234567890fsefge12321213213
                </p>
              </div>
            </div>

            {/* Order Information */}
            <div className="flex flex-col gap-7">
              {/* order time */}
              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">下單時間</p>
                  <p className="text-xl">2024/01/01 16:00</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">Collected Date</p>
                  <p className="text-xl">2024/01/01</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-400">Collection Time</p>
                  <p className="text-xl">10:00 AM - 11:00 AM</p>
                </div>
              </div>

              <div className="flex justify-between">
                <div>
                  <p className="font-bold text-gray-400">Surprise Bag</p>
                  <p className="text-xl">烘焙商品 X 1</p>
                </div>
                <div className="text-right">
                  <p className="font-bold text-gray-400">Total</p>
                  <p className="text-xl">NT$ 10</p>
                </div>
              </div>
            </div>
          </div>

          {/* statement */}
          {/* change the text to the status of the order to check able to collect or not */}
          <div className="flex justify-center items-center gap-2 py-[0.5rem] text-xl text-white">
            <FaCheckCircle className="" />
            <p className="">商品可領取</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderDetail;

/*

================ data required =================
1. order id
2. order time
3. quantity
4. total price
5. collected date
6. collection time



*/
