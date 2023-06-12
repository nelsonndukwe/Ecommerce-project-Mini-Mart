import React from "react";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/bazarSlice";
import { ToastContainer, toast } from "react-toastify";


const Productcard = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const _id = products.title;

  const toString = _id.toString().toLowerCase().split(" ").join("");


  const handledetails = () => {
    navigate(`/product/${toString}`, {
      state: {
        item: products,
      },
    });
  };

  return (
    <div className="group relative">
      <div
        onClick={handledetails}
        className="w-full h-96 cursor-pointer overflow-hidden "
      >
        <img
          src={products.image}
          alt="productsimg"
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
        />
      </div>

      <div className="w-full border-[1px] px-2 py-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="font-base font-titleFont font-bold ">
              {products.title.substring(0, 16)}
            </h2>
          </div>

          <div className="flex gap-2 relative overflow-hidden w-28 text-sm justify-end">
            <div className="flex justify-end gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className="line-through text-gray-500">${products.oldPrice}</p>
              <p className="font-semibold">${products.price}</p>
            </div>

            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: products.id,
                    title: products.title,
                    image: products.image,
                    price: products.price,
                    quantity: 1,
                    description: products.description,
                  })
                ) & toast.success(`${products.title} is added to cart`)
              }
              className="absolute z-20 w-[100px] text-gray-500 hover:text-gray-900 flex 
           items-center gap-1 top-0 -transform translate-x-32 group-hover:translate-x-0 
           transition: transform cursor-pointer duration-500 "
            >
              Add to cart
              <span>
                <MdOutlineShoppingCartCheckout className="text-gray-900 font-2xl" />
              </span>
            </p>
          </div>
        </div>

        <div>
          <p>{products.category}</p>
        </div>

        <div className="absolute top-4 right-0">
          {products.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-">
              Sale
            </p>
          )}
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

export default Productcard;
