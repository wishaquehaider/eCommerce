import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object({
    fullName: Yup.string().required('Full Name is required'),
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phoneNumber: Yup.string()
      .matches(/^[0-9]+$/, 'Phone number must contain only digits')
      .min(6, 'Phone number must be at least 6 digits')
      .required('Phone Number is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
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
      <div className="container px-1 py-10  flex flex-wrap  justify-center items-center">
        <div className="lg:w-[40%] md:w-1/2 md:pr-16 lg:pr-0 pr-0 md:-mt-0 -m-0 lg:-mt-[10vh] md:ml-[0px] ml-0 lg:ml-[20vh]">
          <h1 className="font-[700] text-[60px] text-[#BF1017] lg:text-start md:text-start text-center">SellOut</h1>
          <p className="leading-relaxed mt-2 lg:w-[100%] text-[24px] md:w-[70%] w-[100%] lg:text-start md:text-start text-center">
            SellOut helps you sell the stuff you want to the people you want.
          </p>
        </div>
        <div className="lg:w-[40%] md:w-1/2 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label htmlFor="fullName" className="leading-7 text-[18px] font-[700] text-gray-600">
                Full Name:
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className={`w-full bg-white rounded border ${
                  errors.fullName ? 'border-red-500' : 'border-gray-300'
                } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                value={formData.fullName}
                onChange={handleChange}
              />
              {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
            </div>

            <div className="relative mb-4">
              <label htmlFor="username" className="leading-7 text-[18px] font-[700] text-gray-600">
                Username:
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className={`w-full bg-white rounded border ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                value={formData.username}
                onChange={handleChange}
              />
              {errors.username && <p className="text-red-500 text-xs mt-1">{errors.username}</p>}
            </div>
            <div className="relative mb-4">
              <label htmlFor="phoneNumber" className="leading-7 text-[18px] font-[700] text-gray-600">
                Phone Number:
              </label>
              <div className="flex gap-1">
                <select
                  id="countryCode"
                  name="countryCode"
                  className={`w-25 bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-2 leading-8 transition-colors duration-200 ease-in-out`}
                  value={formData.countryCode}
                  onChange={handleChange}
                >
                  <option value="+92">+92 (PK)</option>
                  <option value="+1">+1 (US)</option>
                  <option value="+44">+44 (UK)</option>
                </select>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={`w-full bg-white rounded border ${
                    errors.phoneNumber ? 'border-red-500' : 'border-gray-300'
                  } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out`}
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-red-500 text-xs mt-1">{errors.phoneNumber}</p>
              )}
            </div>

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

            <div className="text-center mt-10">
              <button
                type="submit"
                className="text-white bg-[#BF1017] border-0 py-2 px-8 focus:outline-none rounded-[8px] w-[70%] text-lg"
              >
                Continue
              </button>
            </div>
          </form>
          <Link to="/authentication/signin" className="cursor-pointer hover:underline text-center mt-5 text-sm">
            Already have an account SignIn
          </Link>
          <p className="text-xs text-gray-500 mt-10 text-center">
            By registering you accept{' '}
            <span className="text-[#BF1017] cursor-pointer">Customer Agreement Conditions and Privacy Policy.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
