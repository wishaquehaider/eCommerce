import React, { useState } from "react";
import order from "../../../../accests/images/orderimage.png";
import completeorder from "../../../../accests/images/completeorder.png";
export default function Myorders() {
  const [activeTab, setActiveTab] = useState("myOrders");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <div className="mt-[36px]">
      <h2 className="text-[18px] font-[600] mx-5">My orders</h2>
      <div className="flex justify-center items-center gap-4">
        <button
          className={`px-[30px] py-[12px] text-[18px] ${
            activeTab === "myOrders" ? "text-red-700" : "black"
          } font-[600]  shadow-md rounded-[8px] mt-5`}
          onClick={() => handleTabClick("myOrders")}
        >
         MyOrders
        </button>
        <div className="bg-black w-[1px] h-[40px] mt-6"></div>
        <button
          className={`px-[20px] text-[18px] font-[600] py-[12px] ${
            activeTab === "completed" ? "text-red-700" : "black"
          } shadow-md rounded-[8px] mt-5`}
          onClick={() => handleTabClick("completed")}
        >
          Completed
        </button>
      </div>
      <div className="h-[90vh] overflow-scroll mt-10 overflow-x-hidden mb-10">
        {/* Conditional rendering based on the active tab */}
        {activeTab === "myOrders" && (
          <>
            <div className="flex justify-between gap-2 mt-10 border-gray-200 border-b-2 pb-5 mx-4">
              <div>
                <img src={order} alt="ordr" />
              </div>
              <div>
                <h4 className="font-[500] text-[16px]">Dress</h4>
                <p className="text-[12px] font-[400]">
                  Order sent and on its way.
                </p>
                <p className="text-[12px] font-[400]">13/09/2023</p>
              </div>
              <div>
                <p>$6.00</p>
              </div>
            </div>
            <div className="flex justify-between gap-2 mt-10 border-gray-200 border-b-2 pb-5 mx-4">
              <div>
                <img src={order} alt="ordr" />
              </div>
              <div>
                <h4 className="font-[500] text-[16px]">Dress</h4>
                <p className="text-[12px] font-[400]">
                  Order sent and on its way.
                </p>
                <p className="text-[12px] font-[400]">13/09/2023</p>
              </div>
              <div>
                <p>$6.00</p>
              </div>
            </div>
            <div className="flex justify-between gap-2 mt-10 border-gray-200 border-b-2 pb-5 mx-4">
              <div>
                <img src={order} alt="ordr" />
              </div>
              <div>
                <h4 className="font-[500] text-[16px]">Dress</h4>
                <p className="text-[12px] font-[400]">
                  Order sent and on its way.
                </p>
                <p className="text-[12px] font-[400]">13/09/2023</p>
              </div>
              <div>
                <p>$6.00</p>
              </div>
            </div>
            <div className="flex justify-between gap-2 mt-10 border-gray-200 border-b-2 pb-5 mx-4">
              <div>
                <img src={order} alt="ordr" />
              </div>
              <div>
                <h4 className="font-[500] text-[16px]">Dress</h4>
                <p className="text-[12px] font-[400]">
                  Order sent and on its way.
                </p>
                <p className="text-[12px] font-[400]">13/09/2023</p>
              </div>
              <div>
                <p>$6.00</p>
              </div>
            </div>
            <div className="flex justify-between gap-2 mt-10 border-gray-200 border-b-2 pb-5 mx-4">
              <div>
                <img src={order} alt="ordr" />
              </div>
              <div>
                <h4 className="font-[500] text-[16px]">Dress</h4>
                <p className="text-[12px] font-[400]">
                  Order sent and on its way.
                </p>
                <p className="text-[12px] font-[400]">13/09/2023</p>
              </div>
              <div>
                <p>$6.00</p>
              </div>
            </div>
            <div className="flex justify-between gap-2 mt-10 border-gray-200 border-b-2 pb-5 mx-4">
              <div>
                <img src={order} alt="ordr" />
              </div>
              <div>
                <h4 className="font-[500] text-[16px]">Dress</h4>
                <p className="text-[12px] font-[400]">
                  Order sent and on its way.
                </p>
                <p className="text-[12px] font-[400]">13/09/2023</p>
              </div>
              <div>
                <p>$6.00</p>
              </div>
            </div>
            <div className="flex justify-between gap-2 mt-10 border-gray-200 border-b-2 pb-5 mx-4">
              <div>
                <img src={order} alt="ordr" />
              </div>
              <div>
                <h4 className="font-[500] text-[16px]">Dress</h4>
                <p className="text-[12px] font-[400]">
                  Order sent and on its way.
                </p>
                <p className="text-[12px] font-[400]">13/09/2023</p>
              </div>
              <div>
                <p>$6.00</p>
              </div>
            </div>
          </>
        )}
        {activeTab === "completed" && (
          <>
            <div className="flex justify-between gap-2 mt-10 border-gray-200 border-b-2 pb-5 mx-4">
              <div>
                <img src={completeorder} alt="ordr" />
              </div>
              <div>
                <h4 className="font-[500] text-[16px]">Complted</h4>
                <p className="text-[12px] font-[400]">
                  Order sent and on its way.
                </p>
                <p className="text-[12px] font-[400]">13/09/2023</p>
              </div>
              <div>
                <p>$6.00</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
