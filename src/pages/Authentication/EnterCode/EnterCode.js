import React, { useState, useRef, useEffect } from "react";
import AuthNavbar from "../../Frontend/Components/AuthNavbar/AuthNavbar";

export default function EnterCode() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [resendTimer, setResendTimer] = useState(60);
  const resendTimerRef = useRef(null);

  useEffect(() => {
    resendTimerRef.current = setInterval(() => {
      setResendTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(resendTimerRef.current);
    };
  }, []);

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    if (index > 0 && value === "") {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }

    if (index < otp.length - 1 && value !== "") {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }

    setOtp(newOtp);
  };

  const handlePaste = (e) => {
    const pastedData = e.clipboardData.getData("Text");
    const pastedDigits = pastedData.match(/\d/g);

    if (pastedDigits && pastedDigits.length === 6) {
      const newOtp = Array.from(
        { length: 6 },
        (_, index) => pastedDigits[index] || ""
      );
      setOtp(newOtp);
    }
  };

  const handleResendCode = () => {
    clearInterval(resendTimerRef.current);
    setResendTimer(60);
    resendTimerRef.current = setInterval(() => {
      setResendTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);
  };

  return (
    <div>
      <AuthNavbar />
      <section className="text-center">
        <div className="flex flex-col justify-center mt-[10vh] item-center">
          <h4 className="text-[black] text-[22px] font-[700]">
            Enter 6-digit code
          </h4>
          <p>Your code was sent to +44 77425674908.</p>
        </div>
        <div className="mt-10 gap-[3px]">
          {otp.map((digit, index) => (
            <input
              key={index}
              type="tel"
              id={`otp-input-${index}`}
              className="text-center border-b-2 border-gray-300 w-[7vh] focus:outline-none mx-5"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onPaste={handlePaste}
            />
          ))}
        </div>
        <div className="mt-10">
          {resendTimer > 0 && <p>{`Resend code: ${resendTimer}s`}</p>}
          {resendTimer === 0 && (
            <button
              onClick={handleResendCode}
              className="text-[blue] underline cursor-pointer"
            >
              Resend Code
            </button>
          )}
        </div>
      </section>
    </div>
  );
}
