/* eslint-disable no-unused-vars */
import React from 'react';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Contact() {
  function submit(values) {
    console.log('submitted:', values);
  }

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } = useFormik({
    initialValues: {
      name: '',
      age: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      age: Yup.number().required('Age is required').positive().integer(),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      password: Yup.string().required('Password is required').min(8, 'Password must be at least 8 characters long'),
    }),
    onSubmit: submit,
  });

  return (
    <>
      <div className="contact">
        <div className="container  mt-32 mb-12 md:px-5">
          <h2 className="uppercase md:text-[2.5rem] text-[1.75rem] text-center font-[700]  text-[#2c3e50]">Contact Section</h2>

          <div className="flex justify-center items-center mt-3">
            <div className="me-4 w-[80px] h-[4px] bg-[#2c3e50]"></div>
            <i className="fa-solid fa-star"></i>
            <div className="ms-4 w-[80px] h-[4px] bg-[#2c3e50]"></div>
          </div>

          <form onSubmit={handleSubmit} className="form md:w-[66%] w-full md:px-10 mx-auto mt-24">


            <div className="flex flex-col text-left my-2">
              <label
                htmlFor="name"
                className={`relative  text-[#1abc9c] mb-1 transition-all duration-[0.6s] z-[1] ${values.name ? 'top-0' : 'top-6'}`}
              >
                userName:
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.name}
                type="text"
                id="name"
                name="name"
                placeholder="UserName"
                className="py-4 border-b z-[2] text-lg rounded bg-white focus:outline-0"
              />
              {errors.name && touched.name && (
                <div
                  className="p-4 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span>{errors.name}</span>
                </div>
              )}
            </div>



            <div className="flex flex-col text-left my-2">
              <label
                htmlFor="age"
                className={`relative  text-[#1abc9c] mb-1 transition-all duration-[0.6s] z-[1] ${values.age ? 'top-0' : 'top-6'}`}
              >
                userAge:
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.age}
                type="text"
                id="age"
                name="age"
                placeholder="UserAge"
                className="py-4 border-b z-[2] text-lg rounded bg-white focus:outline-0"
              />
              {errors.age && touched.age && (
                <div
                  className="p-4 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span>{errors.age}</span>
                </div>
              )}
            </div>





            <div className="flex flex-col text-left my-2">
              <label
                htmlFor="email"
                className={`relative  text-[#1abc9c] mb-1 transition-all duration-[0.6s] z-[1] ${values.email ? 'top-0' : 'top-6'}`}
              >
                userEmail:
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                type="email"
                id="email"
                name="email"
                placeholder="UserEmail"
                className="py-4 border-b z-[2] text-lg rounded bg-white focus:outline-0"
              />
              {errors.email && touched.email && (
                <div
                  className="p-4 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span>{errors.email}</span>
                </div>
              )}
            </div>





            <div className="flex flex-col text-left my-2">
              <label
                htmlFor="password"
                className={`relative  text-[#1abc9c] mb-1 transition-all duration-[0.6s] z-[1] ${values.password ? 'top-0' : 'top-6'}`}
              >
                userPassword:
              </label>
              <input
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                type="password"
                id="password"
                name="password"
                placeholder="userPassword"
                className="py-4 border-b z-[2] text-lg rounded bg-white focus:outline-0"
              />
              {errors.password && touched.password && (
                <div
                  className="p-4 my-1 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span>{errors.password}</span>
                </div>
              )}
            </div>






            <button
              type="submit"
              className="mt-6 bg-[#1abc9c] text-white  py-2 px-4 rounded hover:bg-[#16a085]   transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
