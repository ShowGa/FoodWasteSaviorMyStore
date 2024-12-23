import React, { useState, useEffect, useRef } from "react";
// react-router-dom
import { useParams } from "react-router-dom";
// assets
import { img1, img2 } from "../assets";
// mui
import { Select, MenuItem } from "@mui/material";
// toast
import toast from "react-hot-toast";
// service
import PackageService from "../service/packageService";
import UploadImgService from "../service/uploadImgService";
// utils
import { categoryConvertor } from "../utils/categoryConvertor";
// icons
import { FaPen } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";

const ProductOverview = () => {
  const { packageId } = useParams();

  // image input ref
  const imgInputRef = useRef(null);

  const [editing, setEditing] = useState(false);
  // Overview => get posted form data from backend
  const [postedFormData, setPostedFormData] = useState({});
  // change this later
  // Overview => get form data from backend at first
  const [formData, setFormData] = useState({});

  const [imgFile, setImgFile] = useState(null);
  const [imgPreview, setImgPreview] = useState(null);

  const [imgChanged, setImgChanged] = useState(false);

  // =================== //
  // Helper function
  // =================== //

  // handle change
  const handleChangeImg = (e) => {
    setImgFile(e.target.files[0]);
  };

  // updaload image to cloudinary
  const handleUploadImg = () => {
    const fileName = new Date().getTime() + imgFile.name;

    UploadImgService.uploadImg(imgFile, fileName)
      .then((res) => {
        const imgUrl = res.data.secure_url;
        setImgPreview(imgUrl);
        // update formData
        setFormData({ ...formData, packageCoverImageUrl: imgUrl });
        setImgChanged(true);
        toast.success("變更完成，請記得按下儲存變更!");
      })
      .catch((err) => {
        toast.error("上傳失敗，請稍後再試!");
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        console.log(err);
      });
  };

  const handleGetPackageOverview = async () => {
    PackageService.getPackageOverview(packageId)
      .then((res) => {
        const responseData = res.data.data;
        setPostedFormData(responseData);
        setFormData(responseData);
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  const handleUpdateSubmitFormData = (e) => {
    if (e) e.preventDefault();

    if (!checkFormDataIsChanged()) {
      toast.error("請先修改資料");
      return;
    }

    // take out packageId from formData
    const { packageId, ...formDataWithoutPackageId } = formData;

    PackageService.updatePackageOverview(packageId, formDataWithoutPackageId)
      .then((res) => {
        const responseData = res.data.data;
        setPostedFormData(responseData);
        setFormData(responseData);
        setEditing(false);
        toast.success("更新成功");
      })
      .catch((err) => {
        const message =
          err.response?.data.message ||
          "糟糕!伺服器似乎出現了問題，請聯絡客服。";
        toast.error(message);
        console.log(err);
      });
  };

  const handleEdit = () => {
    // check if formData === postedFormData
    if (checkFormDataIsChanged()) {
      setFormData(postedFormData);
    }
    setEditing(!editing);
  };

  const handleInputChange = (e) => {
    if (e.target.name === "price") {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        originPrice: value * 2,
        discountPrice: value,
      }));
    }

    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const checkFormDataIsChanged = () => {
    if (formData === postedFormData) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    handleGetPackageOverview();
  }, []);

  useEffect(() => {
    if (imgFile) {
      handleUploadImg();
    }
  }, [imgFile]);

  return (
    <div className="flex flex-col gap-4 mt-10 border border-gray-200 rounded-lg">
      <h2 className="border-b border-gray-200 px-6 pt-6 pb-4 text-2xl font-semibold">
        商品資訊
      </h2>

      {/* make input or select appear when editing = true */}
      <div className="flex flex-col gap-8 pb-6 px-6">
        <div className="h-[20rem] relative bg-red-300 mb-[3rem]">
          {/* cover image */}
          <img
            src={imgPreview || postedFormData.packageCoverImageUrl}
            alt=""
            className="w-full h-full object-cover"
          />
          <input
            type="file"
            ref={imgInputRef}
            onChange={handleChangeImg}
            hidden
          />

          {/* store logo */}
          <div className="border-2 border-white rounded-full bottom-0 absolute left-[50%] translate-x-[-50%] translate-y-[50%]">
            <img src={img2} alt="" className="w-24 h-24 rounded-full" />
          </div>

          {/* edit button */}
          {!imgChanged && (
            <button
              className={`absolute top-2 right-2 p-3 rounded-full text-secondaryTheme font-bold text-xl bg-secondaryTheme hover:bg-secondaryThemeHover transition-all duration-300`}
              onClick={() => imgInputRef.current.click()}
            >
              <FaPen className="text-white text-2xl" />
            </button>
          )}

          {imgChanged && (
            <button
              className={`absolute top-2 right-2 p-3 rounded-full text-secondaryTheme font-bold text-xl bg-secondaryTheme hover:bg-secondaryThemeHover transition-all duration-300`}
              onClick={() => {
                handleUpdateSubmitFormData();
                setImgChanged(false);
              }}
            >
              <FaCheck className="text-white text-2xl" />
            </button>
          )}
        </div>

        {/* edit button */}
        <div className="text-right">
          <button
            className={`px-4 py-2 rounded-md text-secondaryTheme font-bold text-xl`}
            onClick={handleEdit}
          >
            {editing ? "取消" : "編輯"}
          </button>
        </div>

        <form
          className="flex flex-col gap-8"
          onSubmit={handleUpdateSubmitFormData}
        >
          <div className="">
            <p className=" text-gray-500">商品名稱</p>
            {editing ? (
              <input
                value={formData.packageName}
                type="text"
                name="packageName"
                className="w-full border border-gray-400 rounded-md p-2"
                onChange={handleInputChange}
              />
            ) : (
              <span className="font-bold">{postedFormData.packageName}</span>
            )}
          </div>

          <div className="">
            <p className=" text-gray-500">商品描述</p>

            {editing ? (
              <textarea
                value={formData.packageDescription}
                name="packageDescription"
                className="w-full min-h-[10rem] border border-gray-400 rounded-md p-2 resize-none"
                onChange={handleInputChange}
              />
            ) : (
              <span>{postedFormData.packageDescription}</span>
            )}
          </div>

          <div className="">
            <p className=" text-gray-500">商品類別</p>
            {/* change this to mui select */}
            {/* show when editing = true */}
            {editing ? (
              <Select
                name="packageCategory"
                value={formData.packageCategory}
                className="w-full"
                onChange={handleInputChange}
              >
                <MenuItem value="MEALS" className="text-gray-500">
                  正餐
                </MenuItem>
                <MenuItem value="BAKERY" className="text-gray-500">
                  烘焙食品
                </MenuItem>
                <MenuItem value="GROCERY" className="text-gray-500">
                  超市、雜貨
                </MenuItem>
                <MenuItem value="OTHERS" className="text-gray-500">
                  其他
                </MenuItem>
              </Select>
            ) : (
              <span>{categoryConvertor(postedFormData.packageCategory)}</span>
            )}
          </div>

          <div className="">
            <p className=" text-gray-500">過敏原</p>
            {editing ? (
              <textarea
                value={formData.packageAllergensDesc}
                name="packageAllergensDesc"
                className="w-full min-h-[10rem] border border-gray-400 rounded-md p-2 resize-none"
                onChange={handleInputChange}
              />
            ) : (
              <span>{postedFormData.packageAllergensDesc}</span>
            )}
          </div>

          {/* show when editing = true */}
          {editing && (
            <div>
              <p className=" text-gray-500">折價 - 原價</p>
              {/* select with mui , item value = 50, 100, 150, 200, */}
              <Select
                name="price"
                value={formData.discountPrice}
                className="w-full"
                onChange={handleInputChange}
              >
                <MenuItem value="50">50 - 100</MenuItem>
                <MenuItem value="100">100 - 200</MenuItem>
                <MenuItem value="150">150 - 300</MenuItem>
                <MenuItem value="200">200 - 400</MenuItem>
              </Select>
            </div>
          )}

          {/* show when editing = false */}
          {!editing && (
            <>
              <div className="">
                <p className=" text-gray-500">原價</p>
                <span>NT$ {postedFormData.originPrice}</span>
              </div>

              <div className="">
                <p className=" text-gray-500">折價</p>
                <span>NT$ {postedFormData.discountPrice}</span>
              </div>
            </>
          )}

          {/* show when editing = true */}
          {editing && (
            <button
              className={`px-4 py-2 rounded-full text-white font-bold text-xl bg-secondaryThemeHover hover:bg-secondaryTheme transition-all duration-300`}
              type="submit"
            >
              更新
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductOverview;

/*

========== 任務 ==========
1. 完成商品資訊的編輯
  - setEditing(true)
  - 編輯資訊
  - 編輯完成後，setEditing(false)

2. 建立編輯資訊的表單
  - editing 為 true 時，顯示表單
  - editing 為 false 時，顯示資訊

3. 完成商品資訊的顯示
  - 編輯中，顯示編輯資訊
  - 編輯完成，顯示編輯後的資訊
  - setFormData(編輯資訊)

*/

/* =================== deleted code =================== */
{
  /* {editing ? (
              <select
                name="packageCategory"
                className="w-full border border-gray-200 rounded-md p-2"
                onChange={handleInputChange}
              >
                <option value="MEALS" className="text-gray-500">
                  正餐
                </option>
                <option value="BACKERY" className="text-gray-500">
                  烘焙食品
                </option>
                <option value="GROCERY" className="text-gray-500">
                  超市、雜貨
                </option>
                <option value="OTHERS" className="text-gray-500">
                  其他
                </option>
              </select>
            ) : (
              <span>烘焙食品 & 甜點</span>
            )} */
}
