import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AiOutlineStar, AiFillCaretRight } from "react-icons/ai";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";


const Product = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [details, setdetails] = useState({});
  const [qunt, setQunt] = useState(1);

  useEffect(() => {
    setdetails(location.state.item);
  }, []);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            src={details.image}
            alt="productimag"
            className="w-full h-[550px] object-cover "
          />
        </div>

        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold font-titleFont text-black">
              {details.title}
            </h2>
          </div>

          <div className="mt-3">
            <p className="font-semibold text-2xl text-gray-900">
              ${details.price}
            </p>
          </div>

          <div className="flex gap-2">
            <div className="flex items-center gap-2 text-base ">
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
              <AiOutlineStar />
            </div>

            <div>
              <p className="text-xs text-gray-500">(1 Customer Review)</p>
            </div>
          </div>

          <p className="text-base mt-3 text-gray-500">{details.description}</p>

          <div className="flex gap-4">
            <div className="flex items-center gap-4 jusify-between w-[195px] text-gray-500 border p-3">
              <p className="text-sm text-gray-500">Quanity</p>
              <div className="flex items-center gap-4 text-sm font-semibold ">
                <button
                  onClick={() => setQunt(qunt === 1 ? (qunt = 1) : qunt - 1)}
                  className="border h-5 gap-5 font-normal text-lg flex items-center justify-center px-2 
                hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{qunt}</span>
                <button
                  onClick={() => setQunt(qunt + 1)}
                  className="border h-5 gap-5 font-normal text-lg flex items-center justify-center px-2 
                hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: details.id,
                    title: details.title,
                    image: details.image,
                    price: details.price,
                    quantity: qunt,
                    description: details.description,
                  })
                ) & toast.success(`${details.title} is added to cart`)
              }
              className="flex items-center bg-black text-white py-3 px-6 active:bg-gray-800 gap-2"
            >
              Add to Cart
              <span>
                <MdOutlineShoppingCartCheckout />
              </span>
            </button>
          </div>
          <p className="text-base text-gray-500 flex items-center gap-1">
            Category{" "}
            <span>
              <AiFillCaretRight />
            </span>
            <span className="font-medium capitalize">{details.category}</span>
          </p>
        </div>
      </div>

      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Product;
