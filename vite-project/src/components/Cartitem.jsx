import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { GrClose } from "react-icons/gr";
import { GoChevronLeft } from "react-icons/go";
import { deleteItem } from "../Redux/bazarSlice";
import { resetItems } from "../Redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";
import { decreaseQuanitity } from "../Redux/bazarSlice";
import { incrementQuanitity } from "../Redux/bazarSlice";

const Cartitem = () => {
  const dispatch = useDispatch();
  const prodductData = useSelector((state) => state.bazar.productData);
  return (
    <div className="w-2/3 pr-10">
      <div className="w-full ">
        <h2 className="font-titleFont text-2xl ">Shooping Cart</h2>
      </div>

      <div>
        {prodductData.map((item) => {
          return (
            <div
              key={item._id}
              className="flex items-center justify-between gap-6 mt-6"
            >
              <div className="flex items-center gap-2 ">
                <GrClose
                  onClick={() =>
                    dispatch(deleteItem(item._id)) &
                    toast.error(`${item.title} has been removed from cart`)
                  }
                  className="text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300 "
                />
                <img
                  src={item.image}
                  alt="itemimage"
                  className="w-32 h-32 object-cover"
                />
              </div>
              <h2 className="w-53">{item.title.substring(0, 15)}</h2>
              <p className="w-10">{item.price}</p>
              <p className="text-base text-gray-500">Quantity</p>

              <div className="flex items-center gap-4 text-sm font-semibold ">
                <button
                  onClick={() =>
                    dispatch(
                      decreaseQuanitity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 gap-5 font-normal text-lg flex items-center justify-center px-2 
                hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    dispatch(
                      incrementQuanitity({
                        _id: item._id,
                        title: item.title,
                        image: item.image,
                        price: item.price,
                        quantity: 1,
                        description: item.description,
                      })
                    )
                  }
                  className="border h-5 gap-5 font-normal text-lg flex items-center justify-center px-2 
                hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                >
                  +
                </button>
              </div>
              <p>{item.quantity * item.price}</p>
            </div>
          );
        })}
      </div>

      <button
        onClick={() =>
          dispatch(resetItems()) & toast.error("Your Cart is Empty!")
        }
        className="py-1 px-6 mt-8 ml-7 bg-red-500 hover:bg-red-800 duration-300"
      >
        Clear Cart Items
      </button>
      <Link to="/">
        <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300 ">
          <span>
            <GoChevronLeft />
          </span>
          back to shopping
        </button>
      </Link>

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

export default Cartitem;
