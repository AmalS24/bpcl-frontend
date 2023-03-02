import React, { useState } from "react";
import Menubar from "../components/Menubar";
import "../index.css"

const sideBarContents = [
  "create claim",
  "view policy",
  "my profile",
  "change password"
];
const test = [
  "claim for",
  "claim type",
  "Hospital",
  "Doctor",
  "Type",
  "Ailment",
];



const capLimitTable = [
  {
    limit: "Total Limit",
    amt: "30000",
  },
  {
    limit: "Domicillary Limit",
    amt: "12000",
  },
  {
    limit: "Domicillary Availed",
    amt: "0",
  },
  {
    limit: "Hospital Limit",
    amt: "18000",
  },
  {
    limit: "Total Limit",
    amt: "30000",
  },
  {
    limit: "Domicillary Limit",
    amt: "12000",
  },
  {
    limit: "Domicillary Availed",
    amt: "0",
  },
  {
    limit: "Hospital Limit",
    amt: "18000",
  },
  {
    limit: "Total Limit",
    amt: "30000",
  },
  {
    limit: "Domicillary Limit",
    amt: "12000",
  },
  {
    limit: "Domicillary Availed",
    amt: "0",
  },
  {
    limit: "Hospital Limit",
    amt: "18000",
  },
];





const HomePage = () => {
  
  let [arr,setArr] = useState([0])
 
  return (
    <>
      <Menubar />
      <div className="w-screen flex gap-6 h-auto p-5">
        {/* side-bar-navigation */}
        <div className="w-[250px] dark:text-white my-auto uppercase h-auto space-y-8">
          {sideBarContents.map((contents, index) => (
            <div
              key={index}
              className="w-full h-[80px] flex items-center justify-center
             dark:bg-gray-800 bg-white rounded-md hover:border-[2px] border-sky-500
              dark:border-white shadow-lg"
            >
              {contents}
            </div>
          ))}
        </div>

        {/* create-claim-page */}
        <div className="w-[800px] h-[580px] px-5 rounded-md dark:bg-gray-800 bg-white ">
          {/* <h1 className="m-4 text-xl dark:text-white ">CREATE CLAIM</h1> */}
          {/* <div className="w-full grid border-[2px] my-6  p-2 rounded-md border-slate-300 pb-3 dark:border-slate-600 grid-cols-3 h-auto"> */}
          <div className="w-full grid  my-6  p-1 rounded-md  grid-cols-3 h-auto">
            {test.map((item) => (
              <div className="w-full p-2 dark:text-white h-auto space-y-1">
                <p className="ml-2 font-semibold uppercase">{item}</p>
                <select
                  className="w-full border-[2px] text-lg dark:focus:outline-white
              border-gray-500 bg-transparent rounded-md  p-1"
                >
                  <option className="  dark:bg-gray-800">option-1</option>
                  <option className=" dark:bg-gray-800">option-2</option>
                  <option className=" dark:bg-gray-800">option-3</option>
                  <option className=" dark:bg-gray-800">option-4</option>
                </select>
              </div>
            ))}
          </div>

          <div className="w-full  h-[320px] flex gap-3">
            {/* add-claim-table */}
            <div className="w-4/5 mx-3">
            <div className=" space-y-2 h-[280px]   overflow-y-scroll">
              
              <table className="w-full border-[2px] border-slate-300  dark:border-slate-600  ">
                <tbody id="claim-table" className=" dark:text-white ">
                  <tr  className="text-lg text-center">
                    <td className="bg-slate-200 dark:bg-gray-600 p-2 ">
                      Expense type
                    </td>
                    <td className="bg-slate-200 dark:bg-gray-600 p-2 ">
                      Claim Amount
                    </td>
                    <td className="bg-slate-200 dark:bg-gray-600 p-2">
                      Delete
                    </td>
                  </tr>
                    {arr.map(
                      (item,index) => (                     
                    <tr key={index}>
                    <td className="p-2  ">
                      <select
                        className="w-full border-[2px] text-lg dark:focus:outline-white
            border-gray-500 bg-transparent rounded-md  p-1"
                      >
                        <option className="  dark:bg-gray-800">
                          DOMICILLARY
                        </option>
                        <option className=" dark:bg-gray-800">
                        DOMICILLARY
                        </option>
                        <option className=" dark:bg-gray-800">
                        DOMICILLARY
                        </option>
                        <option className=" dark:bg-gray-800">
                        DOMICILLARY
                        </option>
                      </select>
                    </td>
                    <td className="p-2">
                      <input
                        type="text"
                        className="w-full border-[2px] text-lg dark:focus:outline-white
            border-gray-500 bg-transparent rounded-md  p-1"
                      />
                    </td>

                    <td className="p-2">
                      <button onClick={() => {
                        arr.pop()
                        setArr([...arr])
                      }}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="w-6 h-6"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>)
                      
                    )}
                </tbody>
              </table>
             
            </div>
            <button onClick={()=>setArr([...arr,[]])} className="bg-gradient-to-br text-white from-sky-400 via-sky-500 to-sky-600 p-2 my-3  rounded-md">ADD NEW ITEM</button>
            </div>
            
            <div className="w-2/5 border-[2px] border-slate-300  dark:border-slate-600">
              dasd
            </div>
          </div>
        </div>

        {/* cap limit table */}
        <div className="w-[390px] h-auto pt-2 px-2 rounded-md  ">
          <table className="w-full">
            <tbody
              className=" dark:text-white [&>*:nth-child(even)]:bg-slate-200 [&>*:nth-child(odd)]:bg-white
                          dark:[&>*:nth-child(even)]:bg-gray-800 dark:[&>*:nth-child(odd)]:bg-gray-700"
            >
              <tr>
                <td className="bg-sky-600 p-2 border-r-[2px] border-slate-300 dark:border-gray-500">
                  Limit
                </td>
                <td className="bg-sky-600 p-2">Amount</td>
              </tr>
              {capLimitTable.map((cap, index) => (
                <tr key={index}>
                  <td className="p-2 border-r-[2px] border-slate-300 dark:border-gray-600 ">
                    {cap.limit}
                  </td>
                  <td className="p-2">{cap.amt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HomePage;
