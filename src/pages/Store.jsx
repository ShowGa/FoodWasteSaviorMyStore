import React, { useState, useEffect, useRef } from "react";
// components
import PackageCard from "../components/PackageCard";
// react icons
import { FaCirclePlus } from "react-icons/fa6";
// service
import PackageService from "../service/packageService";
import StoreService from "../service/storeService";
import UploadImgService from "../service/uploadImgService";
// toast
import toast from "react-hot-toast";

const Store = () => {
  const coverImgInputRef = useRef(null);
  const logoImgInputRef = useRef(null);

  const [packageCards, setPackageCards] = useState([]);

  const [storeInfo, setStoreInfo] = useState({
    name: "",
    coverImageUrl: "",
    logoImageUrl: "",
    about: "",
  });

  const handleImageChange = (e) => {
    const targetName = e.target.name;

    const targetImgFile = e.target.files[0];
    const targetFileName = new Date().getTime() + targetImgFile.name;

    UploadImgService.uploadImg(targetImgFile, targetFileName)
      .then((res) => {
        const uploadedImgUrl = res.data.secure_url;

        if (targetName === "coverImageUrlUpload") {
          setStoreInfo({ ...storeInfo, coverImageUrl: uploadedImgUrl });
        } else if (targetName === "logoImageUrlUpload") {
          setStoreInfo({ ...storeInfo, logoImageUrl: uploadedImgUrl });
        }

        toast.success("上傳圖片成功，請記得按更新按鈕!");
      })
      .catch((err) => {
        toast.error("上傳圖片失敗，請稍後再試!");
        console.log(err);
      });
  };

  const handleGetStoreInfo = () => {
    StoreService.getStoreInfo()
      .then((res) => {
        setStoreInfo(res.data.data);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  const handleUpdateStoreInfo = (e) => {
    e.preventDefault();

    StoreService.updateStoreInfo(storeInfo)
      .then((res) => {
        toast.success("更新成功");
        setStoreInfo(res.data.data);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

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

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setStoreInfo({ ...storeInfo, [name]: value });
  };

  useEffect(() => {
    handleGetPackageList();
    handleGetStoreInfo();
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

          <div className="flex flex-col flex-wrap gap-4 pb-6 px-6">
            <div className="h-[20rem] relative bg-red-300 mb-[3rem]">
              {/* cover image */}
              <img
                src={storeInfo.coverImageUrl}
                alt=""
                className="w-full h-full object-cover cursor-pointer"
                onClick={() => coverImgInputRef.current.click()}
              />

              <input
                name="coverImageUrlUpload"
                type="file"
                ref={coverImgInputRef}
                onChange={handleImageChange}
                hidden
              />
            </div>

            <form className="flex flex-col items-center gap-4">
              {/* store logo */}
              <div className="w-[7rem] h-[7rem]">
                <img
                  src={storeInfo.logoImageUrl}
                  alt=""
                  className="w-full h-full rounded-full cursor-pointer"
                  onClick={() => logoImgInputRef.current.click()}
                />

                <input
                  name="logoImageUrlUpload"
                  type="file"
                  ref={logoImgInputRef}
                  onChange={handleImageChange}
                  hidden
                />
              </div>

              <div className="max-w-[30rem] w-full">
                <p className=" text-gray-500">店家名稱</p>
                <input
                  type="text"
                  name="name"
                  onChange={handleChangeInput}
                  value={storeInfo.name}
                  className=" w-full border border-gray-400 rounded-md p-2 "
                />
              </div>

              <div className="max-w-[30rem] w-full">
                <p className=" text-gray-500">關於我們</p>
                <textarea
                  name="about"
                  value={storeInfo.about}
                  onChange={handleChangeInput}
                  className=" w-full min-h-[10rem] border border-gray-400 rounded-md p-2 resize-none"
                  rows={9}
                />
              </div>

              <button
                className="bg-secondaryTheme text-white px-4 py-2 rounded-md"
                onClick={(e) => handleUpdateStoreInfo(e)}
              >
                更新
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Store;
