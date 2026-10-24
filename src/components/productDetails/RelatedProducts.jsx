import React, { useEffect } from "react";
import { Link } from "react-router";

const RelatedProducts = ({ Category }) => {
  return (
    <main className="min-h-screen w-full bg-[#e6e2d9] flex flex-col justify-center items-center gap-y-12 px-6 py-20 scrollbar-none">
      <h3 className=" text-[#012016] font-serif text-4xl font-normal tracking-widest">
        Related Products
      </h3>
      <div className="categories-container flex items-center gap-8 pt-10 overflow-scroll scrollbar-none w-full">
        {Category?.slice(0, 4)?.map((item, i) => {
            return(
                <Link to={`/jawda/collections/${item?.itemId}`} key={item?.itemId} className="group min-w-sm p-4 min-h-160 max-h-190 flex flex-col items-center justify-center gap-y-6 overflow-hidden">
                    <div className="w-full h-108 overflow-hidden rounded-lg">
                        <img src={item?.image?.imageUrl} alt="" className="w-full min-h-full object-fit-cover group-hover:scale-105 duration-300 transition-all" />
                    </div>
                    <div className="mr-auto space-y-2 min-h-40 max-h-60">
                      <h3 className="text-sm text-[#414845b4] font-sans uppercase tracking-widest">{item?.categories?.[0]?.categoryName}</h3>
                      <p className="leading-8 tracking-wider text-lg lg:text-xl capitalize font-['playfair'] group-hover:text-[#795500] duration-300 transition-all">{item?.title}</p>
                      <p className="text-[#795500] font-semibold text-lg">$ {item?.price?.value?? "00:00"}</p>
                    </div>
                </Link>
            )
        })}
      </div>
    </main>
  );
};

export default RelatedProducts;
