import React, { useState, useEffect } from "react";
// components
import PackageCard from "../components/PackageCard";
// react icons
import { FaCirclePlus } from "react-icons/fa6";
// service
import PackageService from "../service/packageService";
// toast
import toast from "react-hot-toast";

const Store = () => {
  const [packageCards, setPackageCards] = useState([]);

  const handleGetPackageList = () => {
    PackageService.getPackageList()
      .then((res) => {
        setPackageCards(res.data.data);
        toast.success("找到您的商品囉!");
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  const handleCreatePackage = () => {
    PackageService.createPackage()
      .then((res) => {
        setPackageCards([...packageCards, res.data.data]);
        toast.success("新增商品成功，請修改商品資訊");
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
    handleGetPackageList();
  }, []);

  return (
    <section className="w-full">
      <div className="px-28 py-20">
        <h1 className="text-3xl font-semibold">總覽</h1>

        <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
          <h2 className="border-b border-gray-200 px-6 pt-6 pb-4 text-2xl font-semibold">
            店鋪販售的商品
          </h2>

          <div className="flex flex-wrap gap-4 pb-6 px-6">
            {packageCards.length > 0 &&
              packageCards.map((packageCard) => (
                <PackageCard packageCard={packageCard} />
              ))}

            {packageCards.length < 3 && (
              <>
                <div className="border border-gray-200 rounded-md p-4 max-w-[20rem] h-[15rem] flex flex-col items-center justify-center gap-4">
                  <p className="text-gray-500">
                    {packageCards.length === 0
                      ? "還沒有任何商品喔!趕快來新增一個吧!"
                      : "還有更多商品可以新增喔!最多三個。"}
                  </p>
                  <button
                    onClick={handleCreatePackage}
                    className="flex items-center gap-2 text-secondaryTheme hover:text-secondaryThemeHover transition-all duration-300"
                  >
                    <FaCirclePlus className="text-4xl" />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Store information */}
        <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
          <h2 className="border-b border-gray-200 px-6 pt-6 pb-4 text-2xl font-semibold">
            店家資訊
          </h2>

          <div className="flex flex-wrap gap-4 pb-6 px-6"></div>
        </div>
      </div>
    </section>
  );
};

export default Store;
