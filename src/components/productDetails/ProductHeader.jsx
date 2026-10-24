import React, { useEffect, useRef, useState } from "react";
import { RiShoppingBag3Fill } from "react-icons/ri";
import { IoMdAddCircleOutline } from "react-icons/io";
import { TbSparkle2 } from "react-icons/tb";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { BiLeaf } from "react-icons/bi";

const ProductHeader = ({ item }) => {
  // item returned data

  const {
    itemId,
    title,
    categoryPath,
    image,
    description,
    additionalImages,
    itemLocation,
    price,
    itemWebUrl,
    condition,
    seller,
    color,
    size,
    material,
    pattern,
    brand,
    sizeType,
    estimatedAvailabilities,
  } = item;

  // start the initial state section

  const [mainImage, setMainImage] = useState(image?.imageUrl);
  const [images, setImages] = useState([]);
  const [isChanging, setIsChanging] = useState(false);
  const [details, setDetails] = useState(false);
  const [instructions, setInstructions] = useState(false);

  // get the textContent from description using DOMParser

  const parser = new DOMParser();
  const doc = parser.parseFromString(description, "text/html");

  const descriptionParagraph =
    doc.querySelector("body div p span")?.innerHTML ||
    doc.querySelector("body div p")?.textContent.trim() ||
    doc.querySelector("body p")?.textContent?.trim() ||
    [...doc.body.childNodes]
      .filter((node) => node.nodeType === Node.TEXT_NODE)
      .map((node) => node.textContent.trim())
      .filter(Boolean)
      .join(" ") ||
    " ";
  const descriptionUl = [...doc.querySelectorAll("ul li")].map(
    (li) => li.textContent,
  );

  // test the data

  useEffect(() => {
    setImages([image, ...(additionalImages || [])]);
    console.log(description);
  }, [additionalImages, image]);

  // start rendering the page

  return (
    <header className="px-4 pt-28 pb-10 bg-[#fdf9f0]">
      <div className="product-data flex justify-center items-start gap-x-6 px-5 pb-10 h-fit relative">
        {/* item images section container  */}

        <div className="images-container flex flex-col gap-y-10 w-[70%]">
          {/* main image holder  */}

          <div className="group overflow-hidden w-full h-172 rounded-2xl border border-[#52634a] shadow-lg shadow-[#3a4236] hover:shadow-xl duration-300 transition-all">
            <img
              src={mainImage}
              alt={title}
              className={`w-full h-full group-hover:scale-105 duration-300 transition-all ${
                isChanging ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            />
          </div>

          {/* subImages holder  */}

          <div className="images grid grid-cols-2 grid-rows-2 gap-5">
            {images?.map((img, i, images) => {
              return (
                <div
                  key={i}
                  onClick={() => {
                    setIsChanging(true);

                    setTimeout(() => {
                      setMainImage(img?.imageUrl);
                      setIsChanging(false);
                    }, 200);
                  }}
                  className="group cursor-pointer relative isolate h-80 overflow-hidden rounded-xl w-full border border-[#52634a] shadow-md shadow-[#3a4236]"
                >
                  <img
                    className=" object-cover object-center w-full h-full group-hover:scale-110 duration-300 transition-all"
                    src={img?.imageUrl}
                    alt={title}
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* item textContent section container  */}

        <div className="data w-[50%] self-start flex flex-col gap-y-8 items-end sticky top-24">
          {/* main item data  */}

          <div className="space-y-6 w-[90%]">
            <h4 className="text-lg text-[#414845] tracking-[.4rem]">
              THE ARCHIVE COLLECTION
            </h4>
            <h3 className="text-5xl font-bold font-serif text-[#17352a] leading-15">
              {title}
            </h3>
            <span className="text-[#a07104] text-lg font-bold">
              {price?.value} {price?.currency}
            </span>
          </div>

          {/* description section  */}

          {!description?.includes("<") && !description?.includes("</") ? (
            <p className="w-[90%] text-[#414845] font-medium font-['playfair]">
              {description}
            </p>
          ) : (
            <div className="w-[90%] text-[#414845] font-medium font-['playfair]">
              {" "}
              {descriptionParagraph}
            </div>
          )}

          <div className="rest text-left w-[90%] space-y-8">
            {color && (
              <div className="colors size font-sans space-y-4 tracking-[.4rem]">
                Color : {color}
                <div className="py-3 mt-3">
                  <div
                    className={`h-8 w-8 rounded-xl border border-gray-400`}
                    style={{ backgroundColor: color }}
                  ></div>
                </div>
              </div>
            )}

            {size && (
              <div className="size font-sans space-y-4 tracking-[.4rem]">
                SIZE : {size}
                {sizeType && (
                  <div className="py-3 mt-3">
                    <span className="inline-flex items-center font-mono tracking-widest  justify-center px-10 py-1 rounded-[.8rem] text-[#85a887da] border border-[#85a887da] uppercase bg-[#394b3c] hover:bg-[#263729] duration-300 transition-all">
                      {sizeType}
                    </span>
                  </div>
                )}
              </div>
            )}

            <div className="size font-sans py-4 tracking-[.4rem]">
              {estimatedAvailabilities?.[0]?.estimatedAvailabilityStatus} :{" "}
              {estimatedAvailabilities?.[0]?.estimatedRemainingQuantity}
            </div>

            <button
              className="cursor-pointer flex justify-center items-center gap-x-4 w-[90%] bg-[#2f4d41] border border-[#54826c] p-4 text-white text-xl hover:bg-[#233b32] duration-300 transition-all"
              type="button"
            >
              <span className="">Add To Bag</span>
              <RiShoppingBag3Fill />
            </button>

            {/* secondary item data  */}

            <div className="details pr-12 flex flex-col gap-y-4">
              <div className="bg-[#7a7a7a8e] w-full h-[.5px] my-4" />
              <div className="flex justify-between tracking-[.4rem] font-semibold text-sm">
                <span>CARE INSTRUCTIONS</span>
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setInstructions((prev) => !prev);
                  }}
                >
                  {instructions ? (
                    <AiOutlineMinusCircle className="text-2xl text-[#7a7a7a] hover:text-[#101010] duration-100 transition" />
                  ) : (
                    <IoMdAddCircleOutline className="text-2xl text-[#7a7a7a] hover:text-[#101010] duration-100 transition" />
                  )}
                </button>
              </div>

              <ul
                className={`overflow-hidden ${
                  instructions ? "max-h-96 opacity-100" : "h-0 opacity-0"
                } transition-all duration-300 ease-in-out `}
              >
                {descriptionUl &&
                  descriptionUl.map((li, i) => {
                    return (
                      <li key={i} className="flex gap-x-4 items-center mb-3">
                        <TbSparkle2
                          className="text-[#795500] text-lg"
                          strokeWidth={3}
                        />
                        <span className="text-[#414845] font-medium font-['playfair]">
                          {li}
                        </span>
                      </li>
                    );
                  })}
              </ul>
            </div>

            <div className="pr-12 flex flex-col gap-y-4">
              <div className="bg-[#7a7a7a8e] w-full h-[.5px] my-4" />
              <div className="flex justify-between tracking-[.4rem] font-semibold text-sm">
                <span>DETAILS</span>
                <button
                  className="cursor-pointer"
                  onClick={() => {
                    setDetails((prev) => !prev);
                  }}
                >
                  {details ? (
                    <AiOutlineMinusCircle className="text-2xl text-[#7a7a7a] hover:text-[#101010] duration-100 transition" />
                  ) : (
                    <IoMdAddCircleOutline className="text-2xl text-[#7a7a7a] hover:text-[#101010] duration-100 transition" />
                  )}
                </button>
              </div>

              <ul
                className={`overflow-hidden ${
                  details ? "max-h-96 opacity-100" : "h-0 opacity-0"
                } transition-all duration-300 ease-in-out `}
              >
                {material && (
                  <li className="flex gap-x-4 items-center mb-3">
                    <TbSparkle2
                      className="text-[#795500] text-lg"
                      strokeWidth={3}
                    />
                    <span className="text-[#414845] font-medium font-['playfair]">
                      {material}
                    </span>
                  </li>
                )}

                {brand && (
                  <li className="flex gap-x-4 items-center mb-3">
                    <TbSparkle2
                      className="text-[#795500] text-lg"
                      strokeWidth={3}
                    />
                    <span className="text-[#414845] font-medium font-['playfair]">
                      {brand}
                    </span>
                  </li>
                )}

                {itemLocation && (
                  <li className="flex gap-x-4 items-center mb-3">
                    <TbSparkle2
                      className="text-[#795500] text-lg"
                      strokeWidth={3}
                    />
                    <span className="text-[#414845] capitalize font-medium font-['playfair]">
                      made in {itemLocation?.country}, {itemLocation?.city}
                    </span>
                  </li>
                )}

                {pattern && (
                  <li className="flex gap-x-4 items-center mb-3">
                    <TbSparkle2
                      className="text-[#795500] text-lg"
                      strokeWidth={3}
                    />
                    <span className="text-[#414845] font-medium font-['playfair]">
                      {pattern}
                    </span>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* leaf icon  */}

      <div className="leaf flex items-center justify-center gap-x-4 text-[#795500] mt-10">
        <div className="bg-[#795500] min-w-20 w-[10%] h-[.8px]"></div>
        <BiLeaf className="text-lg" />
        <div className="bg-[#795500] w-min-20 w-[10%] h-[.5px]"></div>
      </div>
    </header>
  );
};

export default ProductHeader;