import React from "react";
// assets
import { img1, img2 } from "../assets";

const ProductOverview = () => {
  return (
    <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
      <h2 className="border-b border-gray-200 px-6 pt-6 pb-4 text-2xl font-semibold">
        商品資訊
      </h2>

      <div className="flex flex-col gap-8 pb-6 px-6">
        <div className="h-[20rem] relative bg-red-300 mb-[3rem]">
          {/* cover image */}
          <img src={img1} alt="" className="w-full h-full object-cover" />

          {/* store logo */}
          <div className="border-2 border-white rounded-full bottom-0 absolute left-[50%] translate-x-[-50%] translate-y-[50%]">
            <img src={img2} alt="" className="w-24 h-24 rounded-full" />
          </div>
        </div>

        <div className="">
          <p className=" text-gray-500">Name</p>
          <span className="font-bold">Marry的甜甜圈驚喜包</span>
        </div>

        <div className="">
          <p className=" text-gray-500">Description</p>
          <span>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi
            optio minima inventore reprehenderit vitae saepe assumenda repellat
            numquam dicta doloremque. Rerum sunt earum, culpa consectetur in ea
            voluptas non et?
          </span>
        </div>

        <div className="">
          <p className=" text-gray-500">Category</p>
          <span>Baked Goods & Pastries</span>
        </div>

        <div className="">
          <p className=" text-gray-500">Dietary type</p>
          <span>Vegan</span>
        </div>

        <div className="">
          <p className=" text-gray-500">Original price</p>
          <span>NT$ 150</span>
        </div>

        <div className="">
          <p className=" text-gray-500">Suprise price</p>
          <span>NT$ 150</span>
        </div>
      </div>
    </div>
  );
};

export default ProductOverview;
