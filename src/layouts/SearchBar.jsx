import React, { useEffect, useMemo, useRef, useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { CiSearch } from "react-icons/ci";
import gsap from "gsap";
import Card from "../components/common/Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { useProduct } from "../context/ProductContext";
import { cases } from "../reducers/Cases";
import { IoMdTrendingUp } from "react-icons/io";
import { LuMoveUpRight } from "react-icons/lu";

const SearchBar = ({ data }) => {
  const [favorites, setFavorites] = useState(
    () => JSON.parse(localStorage.getItem("FavoriteProducts")) ?? [],
  );
  const { dispatch } = useProduct();

  const [search, setSearch] = useState("");
  const [filterByTitle, setFilterByTitle] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState([]);
  const [displayAllData, setDisplayAllData] = useState(false);
  const navigate = useNavigate();

  // save previous search by user
  const oldSearched =
    JSON.parse(localStorage.getItem("oldSearchedProducts")) ?? [];
  const [oldSearchedProducts, setOldSearchedProducts] = useState(oldSearched);

  useMemo(() => {
    setFilterByTitle(
      data?.filter((item) =>
        item?.title?.toLowerCase()?.includes(search.toLowerCase()),
      ),
    );

    setFilterByCategory(
      data?.filter((item) => item?.categories?.[0] == search),
    );
    console.log(data);
  }, [data, search]);

  //   Animation section
  const inputRef = useRef(null);
  const clearRef = useRef(null);
  const clearState = search.length !== 0;

  useEffect(() => {
    if (!clearState || !clearRef.current) return;
    if (clearState) {
      const animation = gsap.fromTo(
        clearRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
      );

      return () => animation.kill();
    }
  }, [clearState]);

  //   style shared items

  const linksStyle =
    "border-b-[1.8px] cursor-pointer font-medium text-[#795500d4] hover:text-[#795500] transition-colors duration-150";

  return (
    <section className="min-h-124 flex flex-col gap-y-6 items-center p-6 w-full">
      {!displayAllData ? (
        <>
          <Link
            onClick={() => {
              dispatch({ type: cases.CLICKED_SEARCH });
              navigate("/collections");
            }}
            className="mr-auto flex items-center gap-3 cursor-pointer text-[#795500d4] hover:text-[#795500] transition-colors duration-150"
          >
            <FaArrowLeftLong className="font-medium text-lg" />
            <span>Back</span>
          </Link>

          {/* search area   */}
          <div className="searchBar py-2 px-13 shadow flex justify-between h-14 rounded-2xl relative w-[80%] bg-white">
            <input
              type="text"
              ref={inputRef}
              placeholder="Search bags, watches, jewelry, sunglasses…"
              className="w-full h-full outline-none border-none"
              onChange={(e) => setSearch(e.target.value)}
            />
            <CiSearch
              className="absolute text-[#5e4200] cursor-pointer top-[30%] left-[2%] text-xl"
              strokeWidth={1.6}
              onClick={() => {
                localStorage.setItem(
                  "oldSearchedProducts",
                  JSON.stringify([...oldSearchedProducts, search]),
                );
              }}
            />
            {clearState && (
              <div
                ref={clearRef}
                onClick={() => {
                  setSearch("");
                  inputRef.current.value = "";
                }}
                className="cursor-pointer text-[#414845] bg-[#f7f3eacc] p-1.5  rounded-xl uppercase absolute flex gap-1 items-center top-[25%] right-[3%] hover:bg-[#f7f3ea] transition-colors duration-150"
              >
                <span className="tracking-[.18rem] text-xs font-medium">
                  clear
                </span>
                <TiDeleteOutline className="text-[1.1rem]" strokeWidth={0.3} />
              </div>
            )}
          </div>

          {/* results data  */}
          {search.length != 0 && (
            <div className="flex justify-between items-center w-full">
              <span className="text-[#41484592] text-sm font-medium">
                {filterByTitle.length} results for "{search}"
              </span>
              {filterByTitle.length > 4 ? (
                <a
                  onClick={() => setDisplayAllData(!displayAllData)}
                  className={`font-medium  flex items-center gap-x-2 ${linksStyle}`}
                >
                  View all results
                  <FaArrowRightLong className="font-extralight text-sm" />
                </a>
              ) : (
                <a> </a>
              )}
            </div>
          )}

          {/* first four results item container */}
          <div className="w-full flex gap-x-4 items-center justify-start ">
            {/* suggestions section  */}

            <div className="suggestions w-[30%] self-baseline pt-20">
              <p className="flex items-center justify-between">
                <span className="tracking-[.3rem] font-medium text-xs">
                  SUGGESTIONS
                </span>{" "}
                <IoMdTrendingUp className="text-[#5e4200]" />
              </p>
              {oldSearchedProducts && (
                <ul className="flex flex-col gap-y-2 ml-auto mt-8">
                  {oldSearchedProducts.map((item) => {
                    return (
                      <li
                        onClick={() => setSearch(item)}
                        className={`flex items-center justify-between text-[#414845] p-3 rounded-xl hover:bg-[#6c6c6c1b] hover:text-[#5e4200]`}
                      >
                        <span className="">{item}</span>
                        <LuMoveUpRight className="" />
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            {/* result products of the search content */}

            <div
              className={`results grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 gap-y-10 w-full h-fit px-10`}
            >
              {search != 0 &&
                filterByTitle?.slice(0, 3)?.map((item, i) => {
                  return (
                    <Card
                      favorites={favorites}
                      isLCP={i == 0}
                      setFavorites={setFavorites}
                      key={item?.itemId}
                      item={item}
                    />
                  );
                })}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* results item container */}
          <div className={`ml-10 mr-auto w-fit ${linksStyle}`}>
            <button
              className="flex items-center gap-x-3"
              onClick={() => {
                dispatch({ type: cases.CLICKED_SEARCH });
                navigate("/collections");
              }}
            >
              <FaArrowLeftLong />
              <span>Back to the Collection</span>
            </button>
          </div>
          <div className="results grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 w-full h-fit p-10">
            {search != 0 &&
              filterByTitle?.map((item, i) => {
                return (
                  <Card
                    favorites={favorites}
                    isLCP={i == 0}
                    setFavorites={setFavorites}
                    key={item?.itemId}
                    item={item}
                  />
                );
              })}
          </div>
        </>
      )}
    </section>
  );
};

export default SearchBar;
