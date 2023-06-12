import React, { useState } from "react";
import Productcard from "./Productcard";
import { motion } from "framer-motion";
import { staggerContainer } from "../framer/FramerAnim";
import Category from './Category'

const Products = ({ product }) => {
  const [active, setActive] = useState("hello-2");
console.log(active);
  const category = [
    {
      id: "hello-1",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9df857a1-1dc3-49ea-880f-1bb1f0da1ffa/air-force-1-low-x-undefeated-mens-shoes-R2PS0J.png",
      title: "Mens Shoe",
    },

    {
      id: "hello-2",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6b46c043-4b2e-487b-b072-70f9c5638f31/pegasus-trail-4-womens-trail-running-shoes-CQT261.png",
      title: "Womens Shoe",
    },

    {
      id: "hello-3",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e6612c0b-7a9d-4dd4-87b3-4cfea47c6284/air-max-270-big-kids-shoes-HbtNX3.png",
      title: "Kids",
    },

    {
      id: "hello-4",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1ca2b1eb-ec53-42f1-84b6-adc37e488e15/zoom-mercurial-vapor-15-elite-fg-firm-ground-soccer-cleats-NLZxDR.png",
      title: "Soccer",
    },

    {
      id: "hello-5",
      image:
        "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/0a6914ce-ef4f-4d21-95b7-897baee8ce5d/nikecourt-zoom-vapor-cage-4-rafa-mens-hard-court-tennis-shoes-dMxMqL.png",
      title: "Tennis",
    },
  ];

  return (
    <div className="py-10">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col"
      >
        <div className="my-10 w-full  flex flex-col gap-y-5 items-center justify-center md:flex-row gap-x-2 min-h-[70vh]">
          {category.map((item, id) => (
            <>
              <Category
                key={item.id}
                item={item}
                id={id}
                active={active}
                handleClick={setActive}


                
              />

            </>



          ))}
        </div>
      </motion.div>

      <div className="flex flex-col items-center gap-4 ">
        <h1 className="text-2xl bg-gray-900 text-white py-2 w-80 text-center">
          Smart Shopping
        </h1>
        <span className="w-20 h-[3px] bg-gray-900 "></span>
        <p className="max-w-[700px] text-gray-600 text-center">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
        {product.map((items) => {
          return <Productcard key={items.id} products={items} />;
        })}
      </div>
    </div>
  );
};

export default Products;
