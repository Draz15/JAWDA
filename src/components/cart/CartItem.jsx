import React, { useEffect,memo } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiPlus } from "react-icons/fi";
import { FiMinus } from "react-icons/fi";
import { useCart } from "react-use-cart";
const CartItem =  memo(({ item })  => {

  const { updateItemQuantity, removeItem } = useCart();
  return (
    <div  className="py-2 flex justify-between gap-2 sm:gap-x-3  h-68">
      {/* item  image part */}

      <div className="w-[30%] h-full overflow-hidden">
        <img
          src={item?.image?.imageUrl}
          className="w-full h-full object-cover"
          alt=""
        />
      </div>

      {/* item description part */}
      <div className="w-[40%] space-y-3 self-baseline h-full">
        <h4 className={`${item?.title?.length > 40 ? "text-xl":"text-xl min-h-30 sm:text-2xl lg:text-[2rem]"} font-serif font-medium`}>
          {item.title}
        </h4>
        {item?.categories?.[0] && (
          <p className="text-xs text-gray-600 md:text-sm font-semibold font-sans">
            {item?.categories[0].categoryName ?? item?.categories[0]}
          </p>
        )}

        <div className="capitalize flex gap-x-2 items-center px-4 py-2 rounded-3xl bg-[#e9e5d9] w-fit">
          <div className="h-2 w-2 rounded-full bg-[#a27305]" />{" "}
          <span className="tracking-wide text-gray-600">in stock</span>
        </div>

        <div className="flex items-center gap-x-2">
          <button
            className="cursor-pointer"
            onClick={() => removeItem(item?.itemId)}
          >
            <IoCloseOutline
              strokeWidth={3}
              className="text-lg hover:text-[#93000a]"
            />
          </button>{" "}
          <span className="capitalize">Remove</span>
        </div>
      </div>

      {/* item quantity  */}
      <div className="bg-[#dcd2bf6e] h-10 w-28 flex justify-center items-center">
        <button
          className="text-xs md:text-lg block h-full w-[33%] p-2 cursor-pointer hover:bg-[#fcf2df] text-[#1c1c16] transition-all duration-200"
          onClick={() => updateItemQuantity(item?.itemId, item.quantity + 1)}
        >
          <FiPlus />
        </button>
        <span className="text-sm md:text-lg block w-[33%] text-center p-1 md:p-2 pt-2 h-full">
          {item.quantity}
        </span>
        <button
          className="text-xs md:text-lg w-[33%] text-center block cursor-pointer p-2 h-full hover:bg-[#fcf2df] text-[#1c1c16] transition-all duration-200"
          onClick={() => updateItemQuantity(item?.itemId, item.quantity - 1)}
        >
          <FiMinus />
        </button>
      </div>

      {/* item total  */}
      <div className="self-baseline text-2xl h-full font-medium font-serif">
        $ {Math.ceil(Number(item?.price?.value) * item?.quantity)}
      </div>
    </div>
  );
});

export default CartItem;
