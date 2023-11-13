import AuthNavbar from "pages/Frontend/Components/AuthNavbar/AuthNavbar";
import React, { useState } from "react";
import location from "../../../accests/images/location.png";
import { Link, useNavigate } from "react-router-dom";
import mappic from "../../../accests/images/mappic.png";

export default function EnableLocation() {
  const navigation = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleEnableLocation = () => {
    setShowModal(true);
  };

  const handleAllowLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          console.log(
            `User's location: Latitude ${latitude}, Longitude ${longitude}`
          );

          setShowModal(false);
        },
        (error) => {
          console.error("Error getting user location:", error.message);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleDenyLocation = () => {
    console.log("User denied location access.");
    navigation("/");
    setShowModal(false);
  };

  return (
    <>
      <AuthNavbar />
      <Link to={"/"} className="flex justify-end w-[100%]">
        <p className="text-end font-semibold text-sm my-5 lg:mr-[20vh] md:mr-[5vh] mr-[4vh] cursor-pointer">
          Skip
        </p>
      </Link>
      <section className="flex flex-col items-center h-screen px-3">
        <div className="mt-8">
          <h1 className="font-bold text-2xl mb-2">Enable location</h1>
          <p className="text-gray-700 mb-4">
            Enable location while using the app so we can show you Sellers and
            Services in your area.
          </p>
          <img src={location} alt="Location" className="mt-2" />
          <button
            onClick={handleEnableLocation}
            className="bg-red-500 text-white w-full py-3 rounded-[8px] my-[42px] font-bold text-lg"
          >
            Enable
          </button>
        </div>

        {showModal && (
          <div className="fixed inset-0 bg-black text-center  text-white bg-opacity-50 flex items-center justify-center">
            <div className="bg-black bg-opacity-90  py-2 rounded-[20px] shadow-lg text-center">
              <p className="mb-4 text-[30px] font-[600]">
                Allow “SellOut” to use your location?
              </p>
              <p className="text-[21px] font-[400] px-3 w-[100%] ">
                “SellOut” would like to access your location to help you
                <br />
                better find services you need near you.
              </p>
              <div className=" flex justify-center mt-3">
                <img src={mappic} alt="" />
              </div>
              <div className="">
                <div>
                  <button
                    onClick={handleAllowLocation}
                    className="bg-transparent text-white text-[22px] font-[400] py-[19px]"
                  >
                    Allow Once
                  </button>
                </div>
                <hr />
                <div>
                  <button
                    onClick={handleAllowLocation}
                    className="bg-transparent text-white text-[22px] font-[400] py-[19px]"
                  >
                    Allow while Using App
                  </button>
                </div>
                <div>
                  <hr />
                  <button
                    onClick={handleDenyLocation}
                    className="bg-transparent text-white text-[22px] font-[400] py-[19px]"
                  >
                    Don't Allow
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
