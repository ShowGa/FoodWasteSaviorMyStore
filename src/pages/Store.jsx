import React from "react";
// components
import PackageCard from "../components/PackageCard";

const Store = () => {
  return (
    <section className="w-full">
      <div className="px-28 py-20">
        <h1 className="text-3xl font-semibold">John的店舖</h1>

        <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
          <h2 className="border-b border-gray-200 px-6 pt-6 pb-4 text-2xl font-semibold">
            你的商品
          </h2>

          <div className="pb-6 px-6">
            <PackageCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
