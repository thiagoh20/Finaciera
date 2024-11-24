// import React, { useEffect, useState } from "react";
import { NavLink} from "react-router-dom";
// import axios from "axios";


const ProductDetail = () => {
  return (
    <div
      className="divide-y divide-dashed flex flex-col m-8 rounded-lg"
      style={{
        boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
      }}
    >
      <form className="mt-8"
      //  onSubmit={onSubmit}
       >
        <div className="mb-6">
          <label
            htmlFor="app"
            className="block mb-2 text-sm font-medium text-green-700 dark:text-green-500"
          >
            Email
          </label>
          <input
            type="text"
            // onChange={onChange}
            // value={valores.miInput}
            id="objectApp"
            className="bg-green-50 border border-green-500 text-green-900  placeholder-green-700 dark:placeholder-green-500 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full py-2 dark:bg-white dark:border-green-500"
          />
        </div>
        {/* <button
          type="submit"
       
          className=" mt-4 w-full text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Continuar
        </button> */}

        <div className="p-8 flex justify-center w-96 hover:bg-slate-50 hover:decoration-1 hover:underline">
          <NavLink
            to={"/Finaciera"}
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
          Continuar
          </NavLink> 
        </div>
      </form>
    </div>

  );
};

export default ProductDetail;
