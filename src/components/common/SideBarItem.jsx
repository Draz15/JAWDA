import React, { memo } from "react";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { FiTrash } from "react-icons/fi";
import { useCart } from "react-use-cart";

const SidebarItem = memo(({ item }) => {
  const { updateItemQuantity, removeItem } = useCart();
  return (
    <div className="bg-white p-2 flex justify-evenly gap-1 sm:gap-4 min-h-52 w-full rounded-2xl">
      <div className="bg-[#F8F3EA] w-60 rounded-2xl  border border-[#2f4d41] overflow-hidden">
        <img src={item?.image?.imageUrl} className="w-full h-full object-cover" alt="" />
      </div>

      <div className={`h-fit space-y-2 w-[70%] sm:space-y-3 lg:space-y-3.5`}>
        <h4 className={`text-sm md:text-lg leading-6 min-w-[58%] min-20`}>
           {item?.title?.split(" ").length > 5? item?.title?.split(" ")?.slice(0,5)?.join(" "): item.title} 
        </h4>
        {item?.categories?.[0] && (
          <p className="text-xs text-gray-600 md:text-sm font-semibold font-sans">
            {item?.categories[0].categoryName ?? item?.categories[0]}
          </p>
        )}
        <div className="bg-[#F8F3EA] w-16 md:w-20 h-10 flex justify-center overflow-hidden items-center rounded-lg">
          <button
            className="text-xs md:text-base  text-gray-700 block h-full p-1 md:px-1.5 cursor-pointer hover:bg-[#fcf2df] hover:text-[#1c1c16] transition-all duration-200"
            onClick={() => updateItemQuantity(item?.itemId, item.quantity + 1)}
          >
            <FiPlus />
          </button>
          <span className="text-sm md:text-base block p-1 md:p-1.5 pt-2 h-full">
            {item.quantity}
          </span>
          <button
            className="text-xs md:text-base text-gray-700 text-center block cursor-pointer p-1 md:px-1.5 h-full hover:bg-[#fcf2df] hover:text-[#1c1c16] transition-all duration-200"
            onClick={() => updateItemQuantity(item?.itemId, item.quantity - 1)}
          >
            <FiMinus />
          </button>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end py-2 min-w-[20%]">
        <button
          className="text-xs font-medium sm:font-normal cursor-pointer sm:text-sm md:text-lg text-[#ba1a1a] hover:text-[#93000a] transition-all duration-200"
          onClick={() => removeItem(item.itemId)}
        >
          <FiTrash />
        </button>
        <h6 className="text-xs font-medium sm:font-normal sm:text-sm md:text-lg">
          $ {Number(item?.price?.value)?.toFixed(2)}
        </h6>
      </div>
    </div>
  );
});

export default SidebarItem;
