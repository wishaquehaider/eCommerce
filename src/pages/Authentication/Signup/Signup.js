import React from "react";
import AuthNavbar from "pages/Frontend/Components/AuthNavbar/AuthNavbar";

function Signout() {
  return (
    <div className="mx-au px-4 gap-[30px]">
      <div className="lg:flex lg:flex-wrap">
        <div className="lg:w-1/2 lg:fixed ">
          <div className="flex flex-col lg:ml-60 lg:text-left text-center gap-7 lg:pt-64 ">
            <h1 className="text-[60px] font-semibold text-[#BF1017]">SellOut</h1>
            <p className="text-2xl text-slate-600">
              SellOut helps you sell the stuff you want to the people you want.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 mt-20 lg:mt-40 lg:ml-auto lg:shadow-none shadow-md py-5 rounded-xl">
          <div className="responsive-inputs">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-900 dark:text-white text-xl text-slate-600"
                >
                  Full name:
                </label>
                <input
                  type="text"
                  id="fname"
                  className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-900 dark:text-white text-xl text-slate-600"
                >
                  Username:
                </label>
                <input
                  type="email"
                  id=""
                  className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6 ">
                <label
                  htmlFor="password"
                  className="block mb-2 font-medium text-gray-900 dark:text-white text-xl text-slate-600"
                >
                  Mobile number:
                </label>
                <select
                  id="country-code"
                  className=" text-center border border-gray-300 text-gray-900 text-base rounded-lg py-3.5 w-3/12"
                  required
                >
                  <option>+569</option>
                  <option>+92</option>
                  <option>+91</option>
                  <option>+970</option>
                </select>

                <input
                  type="password"
                  id="password"
                  className=" border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 p-3.5 width-80 ml-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-900 dark:text-white text-xl text-slate-600"
                >
                  E mail adress:
                </label>
                <input
                  type="email"
                  id="email"
                  className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-gray-900 dark:text-white text-xl  text-slate-600"
                >
                  Password:
                </label>
                <input
                  type="email"
                  id="password"
                  className="border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
              <div className="flex justify-center flex-column">
                <button
                  type="submit"
                  className="text-white bg-maroon bg-[#BF1017] rounded-lg text-sm px-24 py-2 text-center text-lg mt-10 font-semibold"
                >
                  Continue
                </button>
              </div>
              <div className="fs-9 text-center text-slate-500 mt-4">
                By registering you accept{" "}
                <span className="text-maroon">
                  Customer Agreement Conditions
                </span>{" "}
                and <br />
                <span className="text-maroon">Privacy Policy</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signout;
