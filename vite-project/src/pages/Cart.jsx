import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { cartpage } from "../assets";
import Cartitem from "../components/Cartitem";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  const prodductData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [cartMessage, setcartMessage] = useState(false);
  const [paynow, setPayNow] = useState(false);
  const [totalPrice, setTotalPrice] = useState("");

  console.log(userInfo);

  useEffect(() => {
    let price = 0;

    prodductData.map((data) => {
      price += data.quantity * data.price;
      return price;
    });

    setTotalPrice(price.toFixed(2));
  }, [prodductData]);

  const handleCheckout = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("Pls Login In to Checkout");
    }
  };

  return (
    <div>
      <div>
        <img src={cartpage} alt="" className="w-full h-60 object-cover" />

        {cartMessage && (
          <>
            <h2 className="text-2xl text-red-500  pt-10 flex justify-between items-center">
              Your Cart is Empty PLs Add Items to The Cart
            </h2>

            <Link to="/">
              <button className="mt-8 ml-7 flex items-center gap-1 text-gray-400 hover:text-black duration-300 ">
                <span>
                  <GoChevronLeft />
                </span>
                back to shopping
              </button>
            </Link>
          </>
        )}

        <div className="max-w-screen-xl mx-auto py-20 flex">
          <Cartitem />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium">Cart Total</h2>
              <p className="flex items-center gap-4 text-base ">
                Subtotal
                <span className="font-titleFont font-bold text-lg">
                  ${totalPrice}
                </span>
              </p>

              <p className="flex items-center  gap-4 text-base ">
                Shipping
                <span className="font-titleFont font-bold text-lg">
                  Don’t call Hooks inside loops, conditions, or nested
                  functions.
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold ">${totalPrice}</span>
            </p>

            <button
              onClick={handleCheckout}
              className="text-base bg-black text-white w-full mt-6 py-3 hover:bg-gray-800 duration-300 "
            >
              Checkout
            </button>
          </div>
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

export default Cart;
