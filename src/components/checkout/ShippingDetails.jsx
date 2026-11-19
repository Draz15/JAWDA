import React, { useState } from "react";
import { shippingSchema } from "../../utilities/DetailsValidation";

const ShippingDetails = ({
  shippingData,
  setShippingData,
  setErrors,
  errors,
}) => {
  const getData = (e) => {
    // get the data form event target
    const { name, value, type, checked } = e.target;

    const newValue = type === "checkbox" ? checked : value;

    setShippingData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // checking for the data entered
    const fieldSchema = shippingSchema.shape[name];
    const result = fieldSchema.safeParse(newValue);

    setErrors((prev) => ({
      ...prev,
      [name]: result.success ? "" : result.error.issues[0].message,
    }));
  };

  const submitData = (e) => {
    e.preventDefault();
  };

  const inputStyle =
    "w-full py-2.5 text-xl border-b-[1.4px] outline-0 placeholder:text-xl placeholder:font-normal placeholder:text-[#c1c8c3] border-gray-300 focus:border-gray-700 transition-all duration-150";

  return (
    <section className="w-[55%] h-fit sticky top-0 self-start">
      {/* header section  */}
      <div className="header space-y-1">
        <h3 className="text-[2.8rem] font-['playfair'] font-semibold">
          Shipping Details
        </h3>
        <p className="text-gray-700 text-[1.1rem]">
          Please enter your delivery destination below.
        </p>
      </div>

      {/* form section  */}
      <form
        autoComplete="off"
        action=""
        onSubmit={submitData}
        className="flex flex-col gap-y-6 mt-12 w-full"
      >
        {/* full name input field */}
        <div className="w-full  space-y-1">
          <label
            htmlFor="Full-Name"
            className="block text-[#6f4e01] tracking-[.33rem] text-[.82rem] font-medium"
            autoComplete="off"
          >
            Full Name
          </label>
          <input
            id="fullname"
            autoComplete="off"
            onChange={getData}
            name="fullName"
            placeholder="e.g. Yousef Draz"
            className={inputStyle}
          />
          {errors.fullname && (
            <p className="text-red-500 text-xs mt-1">{errors.fullname}</p>
          )}
        </div>

        {/* street address input field */}
        <div className="w-full  space-y-1 ">
          <label
            htmlFor="Address"
            className="block text-[#6f4e01] tracking-[.33rem] text-[.82rem] font-medium"
          >
            Street Address
          </label>
          <input
            id="Address"
            name="street"
            autoComplete="off"
            onChange={getData}
            placeholder="15 Abbas El Akkad St, Nasr City, Cairo"
            className={inputStyle}
            type="text"
          />
          {errors.street && (
            <p className="text-red-500 text-xs mt-1">{errors.street}</p>
          )}
        </div>

        {/* city && postal code input field */}
        <div className="flex justify-between gap-x-4">
          <div className="w-[48%]  space-y-1">
            <label
              htmlFor="City"
              className="block text-[#6f4e01] tracking-[.33rem] text-[.82rem] font-medium"
            >
              City
            </label>
            <input
              id="city"
              name="city"
              autoComplete="off"
              onChange={getData}
              placeholder="Cairo"
              className={inputStyle}
            />
            {errors.city && (
              <p className="text-red-500 text-xs mt-1">{errors.city}</p>
            )}
          </div>

          <div className="w-[48%]  space-y-1 ">
            <label
              htmlFor="Postal"
              className="block text-[#6f4e01] tracking-[.33rem] text-[.82rem] font-medium"
            >
              Postal Code
            </label>
            <input
              id="Postal"
              autoComplete="off"
              name="postalCode"
              onChange={getData}
              placeholder="11511"
              className={inputStyle}
            />
            {errors.postalCode && (
              <p className="text-red-500 text-xs mt-1">{errors.postalCode}</p>
            )}
          </div>
        </div>

        {/* phone number input field */}
        <div className="w-full  space-y-1 ">
          <label
            htmlFor="Phone"
            className="block text-[#6f4e01] tracking-[.33rem] text-[.82rem] font-medium"
          >
            Phone Number
          </label>
          <input
            id="Phone"
            name="phone"
            autoComplete="off"
            onChange={getData}
            placeholder="+2010 1234 5678"
            className={inputStyle}
          />
          {errors.phone && (
            <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
          )}
        </div>

        {/* billing address input field */}

        <div className="flex items-center gap-5 mt-8">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              name="billingAddress"
              autoComplete="off"
              onChange={getData}
              className="sr-only peer"
            />

            <div className="w-15 h-7 bg-[#d6d5cf] rounded-full peer-checked:bg-[#9d8040] transition-colors"></div>

            <div className="absolute left-1 top-1 w-5 h-5 bg-white rounded-full shadow-sm transition-transform peer-checked:translate-x-8"></div>
          </label>

          <span className="text-xl text-[#222]">Use as billing address</span>
        </div>
      </form>
    </section>
  );
};

export default ShippingDetails;
