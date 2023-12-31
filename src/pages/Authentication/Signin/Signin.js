import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Signin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters'),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear the error for the corresponding input field
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: undefined,
    }));

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    validationSchema
      .validate(formData, { abortEarly: false })
      .then(() => {
        // Validation successful, proceed with form submission or other actions
        console.log('Form values submitted:', formData);
        // Add logic for further actions, such as API calls or navigation
      })
      .catch((validationErrors) => {
        // Validation failed, update state or show error messages
        const newErrors = {};
        validationErrors.inner.forEach((error) => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      });
  };

  return (
    <section className="text-gray-600 body-font lg:mx-[20vh] mx-[5px] md:mx-[20px]">
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <h1 className="font-[700] text-[60px] text-[#BF1017]">SellOut</h1>
          <p className="leading-relaxed mt-2 text-[16px] w-[80%]">
            SellOut helps you sell the stuff you want to the people you want.
          </p>
        </div>
        <div className="lg:w-[40%] md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-[18px] font-[700] text-gray-600">
                Email:
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className={`w-full bg-white rounded border ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="leading-7 text-[18px] font-[700] text-gray-600">
                Password:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className={`w-full bg-white rounded border ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                value={formData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
            </div>
            <Link to="/authentication/entercode">
              <p className="text-sm text-end -mt-2 cursor-pointer hover:underline">Forgot Password</p>
            </Link>
            <div className="text-center mt-10">
              <button
                type="submit"
                className="text-white bg-[#BF1017] border-0 py-2 px-8 focus:outline-none rounded-[8px] w-[60%] text-lg"
              >
                Sign in
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-500 mt-10 text-center">Don’t have an account?</p>
          <div className="text-center mt-5">
            <Link
              to="/authentication/signup"
              className="text-black bg-transparent border border-black border-1 py-2 px-4 focus:outline-none rounded text-sm w-[60%]"
            >
              Create an Account
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signin;
