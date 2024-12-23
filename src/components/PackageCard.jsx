import React from "react";
// react-router-dom
import { Link } from "react-router-dom";
// images
import { img1 } from "../assets";
// utils
import { categoryConvertor } from "../utils/categoryConvertor";

const PackageCard = ({ packageCard }) => {
  return (
    <div
      key={packageCard.id}
      className="border border-gray-200 rounded-md max-w-[20rem] w-full shadow-sm overflow-hidden"
    >
      <div className="w-full h-24">
        <img
          src={packageCard.packageCoverImageUrl}
          alt="product"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-6 py-4 bg-white">
        <h3 className="text-lg font-semibold">{packageCard.packageName}</h3>
        <p className="text-sm text-gray-500">
          {categoryConvertor(packageCard.packageCategory)}
        </p>
        <Link to={`../product/${packageCard.packageId}`}>
          <button className="rounded-full px-4 py-2 mt-4 w-full bg-secondaryTheme hover:bg-secondaryThemeHover text-white font-semibold">
            商品資訊
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PackageCard;
