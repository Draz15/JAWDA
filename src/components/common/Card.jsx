import React, { useEffect, useRef, useState, memo } from "react";
import { Link, useNavigate } from "react-router";
import { CartProvider, useCart } from "react-use-cart";
import { CiHeart } from "react-icons/ci";
import { useAddToFavorites } from "../../utilities/AddFavorites";
import gsap from "gsap";
import { ToastMessage } from "../../utilities/ToastMessage.js";


const Card = memo(({ item, isLCP,favorites }) => {
  const active = "bg-[#52634a] text-white";
  const { addItem } = useCart();
  const navigate = useNavigate();
  const {
    itemId,
    title,
    image,
    price,
    condition,
    categories,
    additionalImages,
  } = item;
  const {addToFavorites} = useAddToFavorites()

  const [images, srtImages] = useState([image, ...(additionalImages || [])]);
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    gsap.to(imgRef.current, {
      left: 0,
      duration: 1.3,
      ease: "power1.in",
      overwrite: true,
    });
  }, [currentImage]);

  const imgRef = useRef(null);
  const timeRef = useRef(null);
  return (
    <div
      key={itemId}
      onMouseEnter={() => {
        if (currentImage < images.length) {
          timeRef.current = setInterval(() => {
            if (images.length == 1) return;
            setCurrentImage((prev) =>
              prev >= images.length - 1 ? 0 : prev + 1,
            );
          }, 3000);
        }
      }}
      onMouseLeave={() => {
        clearInterval(timeRef.current);
      }}
      onDoubleClick={() => navigate(`/collections/${itemId}`)}
      className="product-card group overflow-hidden rounded-2xl border bg-[#f7f3ea] lg:min-w-68 lg:min-h-100 border-stone-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#f7f5ef] h-60">
        <img
          alt={item?.title}
          src={
            images[currentImage === 0 ? images.length - 1 : currentImage - 1]
              ?.imageUrl
          }
          className="absolute inset-0 h-full w-full object-cover"
        />

        <img
          key={currentImage}
          ref={imgRef}
          alt={item?.title}
          src={images[currentImage]?.imageUrl}
          className="absolute left-full h-full w-full object-cover"
        />

        {/* Condition */}
        {condition && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-700 backdrop-blur-sm">
            {condition}
          </span>
        )}

        {/* Favorite Button */}

        <button
          onClick={(e) => addToFavorites(item)}
          type="button"
          aria-label="Add to favorites"
          className={`like-btn absolute cursor-pointer right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full  text-xl shadow-sm transition-colors  ${
            favorites?.some(
              (el) =>
                el.title == item?.title &&
                el?.itemId == item?.itemId &&
                el?.price?.value == item?.price?.value,
            )
              ? active
              : "bg-white/90 text-[#414845] hover:bg-[#52634a] hover:text-white"
          }`}
        >
          <CiHeart strokeWidth={1} />
        </button>
      </div>

      {/* Product Details */}
      <div className="space-y-2 p-3">
        {categories?.[0] && (
          <p className="text-xs font-semibold uppercase tracking-widest text-[#78856c]">
            {categories[0].categoryName ?? categories[0]}
          </p>
        )}

        <h3 className="line-clamp-2 min-h-12 text-sm font-medium leading-6 text-stone-800">
          {title}
        </h3>

        <div className="flex items-center justify-between gap-2">
          <p className="text-lg font-semibold text-[#52634a]">
            {price?.value != null ? `${price.currency} ${price.value}` : "EGP"}
          </p>
        </div>

        {/* Additional Images Count */}
        {additionalImages?.length > 0 ? (
          <p className="text-xs text-stone-500">
            +{additionalImages.length} additional images
          </p>
        ) : (
          <p className="text-xs text-stone-500">+0 additional images</p>
        )}

        <button
          type="button"
          onClick={() => {
            addItem({ ...item, id: itemId });
            ToastMessage(
              "success",
              `${item?.title?.split(" ").slice(0, 5).join(" ")} added successfully`,
            );
          }}
          className="w-full cursor-pointer rounded-xl bg-[#52634a] px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#3e4b37] active:scale-[0.98]"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
});

export default Card;
