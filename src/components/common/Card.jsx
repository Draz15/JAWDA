import React from "react";
import { Link } from "react-router";
import { CiHeart } from "react-icons/ci";

const Card = ({ item }) => {
  const {
    itemId,
    title,
    image,
    price,
    condition,
    categories,
    additionalImages,
  } = item;

  return (
    <Link
      key={itemId}
      to={`/jawda/collections/${itemId}`}
      className="group overflow-hidden rounded-2xl border bg-[#f7f3ea] lg:min-w-68 lg:min-h-100 border-stone-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      {/* Product Image */}
      <div className="relative overflow-hidden bg-[#f7f5ef] h-60">
        <img
          src={image?.imageUrl}
          alt={title}
          className="h-full w-full object-fit-cover object-center transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Condition */}
        {condition && (
          <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-stone-700 backdrop-blur-sm">
            {condition}
          </span>
        )}

        {/* Favorite Button */}
        <button
          type="button"
          aria-label="Add to favorites"
          className="absolute cursor-pointer right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#414845] text-xl shadow-sm transition-colors hover:bg-[#52634a] hover:text-white"
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
          className="w-full cursor-pointer rounded-xl bg-[#52634a] px-3 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-[#3e4b37] active:scale-[0.98]"
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default Card;
