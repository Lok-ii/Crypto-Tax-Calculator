import React from "react";
import Aus from "../assets/icon/Aus";
import India from "../assets/icon/India";
import Uk from "../assets/icon/Uk";
import { useTaxContext } from "../Context/Context";
import { IoCheckmarkSharp } from "react-icons/io5";
import SidebarImage from "../assets/Images/SidebarImage";
import { FaArrowRightLong } from "react-icons/fa6";
import Faq from "./Faq";

const Home = () => {
  const {
    countryCurrency,
    setCountryCurrency,
    shortTerm,
    setShortTerm,
    taxRate,
    handleTaxRate,
    purchasePrice,
    getPurchasePrice,
    salesPrice,
    getSalesPrice,
    expense,
    getExpenses,
    annualIncome,
    getAnnualIncome,
    rates,
    capitalGains,
    discountForCapitalGains,
    netGains,
    tax,
  } = useTaxContext();
  return (
    <div className="w-full flex justify-center py-12 px-8 gap-4">
      <div className="w-[75%] flex flex-col items-center gap-10">
        <div className="w-full flex flex-col bg-white rounded-lg py-12 items-center gap-10">
          <h1 className="text-center text-4xl font-bold">
            Free Crypto Tax Calculator Australia
          </h1>
          <div className="flex w-[80%] items-center justify-around border-b-2 border-bgColor pb-8">
            <div className="flex items-center gap-4">
              <label htmlFor="financialYear">Financial year</label>
              <select
                name="finacialyear"
                id="financialYear"
                className="w-[12rem] h-[2.8rem] flex border bg-bgColor rounded-lg pl-4"
              >
                <option value="FY 2023-24">FY 2023-24</option>
              </select>
            </div>
            <div className="flex items-center gap-4">
              <label htmlFor="country">Country</label>
              <select
                name="country"
                id="country"
                value={countryCurrency}
                className="w-[12rem] h-[2.8rem] flex border bg-bgColor rounded-lg pl-4"
                onChange={(e) => {
                  setCountryCurrency(e.target.value);
                }}
              >
                <option value="$" className="flex items-center gap-x-2">
                  Australia
                </option>
                <option value="₹" className="flex items-center gap-x-2">
                  India
                </option>
                <option value="$" className="flex items-center gap-x-2">
                  UK
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap w-[80%] gap-y-8 items-center justify-around">
            <div className="w-[35%] flex gap-2 flex-col">
              <label className="text-sm " htmlFor="purchase">
                Enter purchase price of Crypto
              </label>
              <div className="flex items-center rounded-lg bg-bgColor h-[3rem] pl-2 gap-2">
                <span>{countryCurrency}</span>
                <input
                  className="h-full w-full bg-bgColor rounded-lg outline-none text-black"
                  type="number"
                  name="purchase"
                  id="purchase"
                  placeholder="Enter Amount"
                  onChange={getPurchasePrice}
                  value={purchasePrice}
                />
              </div>
            </div>
            <div className="w-[35%] flex gap-2 flex-col">
              <label className="text-sm " htmlFor="sale">
                Enter sale price of Crypto
              </label>
              <div className="flex items-center rounded-lg bg-bgColor h-[3rem] pl-2 gap-2">
                <span>{countryCurrency}</span>
                <input
                  className="h-full w-full bg-bgColor rounded-lg outline-none text-black"
                  type="number"
                  name="sale"
                  id="sale"
                  placeholder="Enter Amount"
                  onChange={getSalesPrice}
                  value={salesPrice}
                />
              </div>
            </div>
            <div className="w-[35%] flex gap-2 flex-col">
              <label className="text-sm " htmlFor="expenses">
                Enter your Expenses
              </label>
              <div className="flex items-center rounded-lg bg-bgColor h-[3rem] pl-2 gap-2">
                <span>{countryCurrency}</span>
                <input
                  className="h-full w-full bg-bgColor rounded-lg outline-none text-black"
                  type="number"
                  name="expenses"
                  id="expenses"
                  placeholder="Enter Amount"
                  onChange={getExpenses}
                  value={expense}
                />
              </div>
            </div>
            <div className="w-[35%] flex gap-2 flex-col">
              <label className="text-sm " htmlFor="investmentType">
                Investment Type
              </label>
              <div className="flex items-center gap-2 w-full">
                <div className="flex flex-col gap-1 w-[50%]">
                  <button
                    className={`flex items-center gap-2 border-2  h-[3rem] pl-2 ${
                      shortTerm
                        ? "text-primaryBlue border-primaryBlue bg-lightPrimaryBlue"
                        : ""
                    } rounded-md`}
                    onClick={(e) => {
                      e.preventDefault();
                      setShortTerm(true);
                    }}
                  >
                    Short Term{" "}
                    <IoCheckmarkSharp
                      className={`text-2xl ${shortTerm ? "" : "hidden"}`}
                    />
                  </button>
                  <span className="text-xs">&lt;12 months</span>
                </div>
                <div className="flex flex-col gap-1 w-[50%]">
                  <button
                    className={`flex items-center gap-2 border-2  h-[3rem] pl-2 ${
                      !shortTerm
                        ? "text-primaryBlue border-primaryBlue bg-lightPrimaryBlue"
                        : ""
                    } rounded-md`}
                    onClick={(e) => {
                      e.preventDefault();
                      setShortTerm(false);
                    }}
                  >
                    Long Term{" "}
                    <IoCheckmarkSharp
                      className={`text-2xl ${shortTerm ? "hidden" : ""}`}
                    />
                  </button>
                  <span className="text-xs">&gt;12 months</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap w-[80%] gap-y-8 items-center justify-around">
            <div className="w-[35%] flex gap-2 flex-col">
              <label className="text-sm " htmlFor="annualIncome">
                Select Your Annual Income
              </label>
              <select
                id="annualIncome"
                className="flex items-center rounded-lg bg-bgColor h-[3rem] pl-2 gap-2"
                onChange={(e) => handleTaxRate(e.target.value)}
              >
                <option value="0">0 - {countryCurrency} 18,200</option>
                <option value="19">
                  {countryCurrency} 18,201 - {countryCurrency} 45,000
                </option>
                <option value="32.5">
                  {countryCurrency} 45,001 - {countryCurrency} 120,000
                </option>
                <option value="37">
                  {countryCurrency} 120,001 - {countryCurrency} 180,000
                </option>
                <option value="45">{countryCurrency} 180,001+</option>
              </select>
            </div>
            <div className="w-[35%] flex gap-2 flex-col">
              <label className="text-sm " htmlFor="taxRate">
                Tax Rate
              </label>
              <span className="text-xs font-semibold">{taxRate}</span>
            </div>
            <div
              className={`w-[35%] flex gap-2 flex-col ${
                shortTerm ? "hidden" : ""
              }`}
            >
              <label className="text-sm " htmlFor="capitalGains">
                Capital gains amount
              </label>
              <div className="flex items-center rounded-lg bg-bgColor h-[3rem] pl-2 gap-2">
                <span>{countryCurrency}</span>
                <input
                  className="h-full w-full bg-bgColor rounded-lg outline-none text-black"
                  type="number"
                  name="capitalGains"
                  id="capitalGains"
                  placeholder="0"
                  value={capitalGains}
                />
              </div>
            </div>
            <div
              className={`w-[35%] flex gap-2 flex-col ${
                shortTerm ? "hidden" : ""
              }`}
            >
              <label className="text-sm " htmlFor="discount">
                Discount for long term gains
              </label>
              <div className="flex items-center rounded-lg bg-bgColor h-[3rem] pl-2 gap-2">
                <span>{countryCurrency}</span>
                <input
                  className="h-full w-full bg-bgColor rounded-lg outline-none text-black"
                  type="number"
                  name="discount"
                  id="discount"
                  placeholder="0"
                  value={discountForCapitalGains}
                />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-wrap w-[80%] justify-around">
            <div className="w-[35%] h-[7rem] bg-greenTransparent rounded-lg flex flex-col items-center justify-center">
              <p className="font-semibold">Net Capital gains tax amount</p>
              <p className="text-lg font-bold text-textGreen">
                {countryCurrency} {netGains}
              </p>
            </div>
            <div className="w-[35%] h-[7rem] bg-blueTransparent rounded-lg flex flex-col items-center justify-center">
              <p className="font-semibold">The tax you need to pay*</p>
              <p className="text-lg font-bold text-primaryBlue">
                {countryCurrency} {tax}
              </p>
            </div>
          </div>
        </div>
        <Faq />
      </div>
      <div className="w-[25%]">
        <div className="w-[95%] bg-primaryBlue h-[35rem] rounded-lg flex flex-col items-center justify-center gap-8">
          <h1 className="text-white text-lg font-semibold text-center">
            Get Started with KoinX for FREE
          </h1>
          <p className="w-[80%] text-center text-sm text-white">
            With our range of features that you can equip for free, KoinX allows
            you to be more educated and aware of your tax reports.
          </p>
          <SidebarImage />
          <button className="bg-white py-2 px-8 rounded-[0.3rem] flex items-center gap-4 ">
            Get Started for FREE <FaArrowRightLong />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
