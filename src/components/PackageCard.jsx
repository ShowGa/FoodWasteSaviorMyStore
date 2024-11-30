import React from "react";
// images
import { img1 } from "../assets";

const PackageCard = () => {
  return (
    <div className="border border-gray-200 rounded-md max-w-[20rem] shadow-sm overflow-hidden">
      <div className="w-full h-32">
        <img src={img1} alt="product" className="w-full h-full object-cover" />
      </div>
      <div className="px-6 py-4 bg-white">
        <h3 className="text-lg font-semibold">商品名稱</h3>
        <button className="rounded-full px-4 py-2 mt-4 w-full bg-secondaryTheme hover:bg-secondaryThemeHover">
          查看商品
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
