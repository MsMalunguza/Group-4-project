import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Register() {
  const validate = Yup.object({
    firstName: Yup.string().required("First name is required!"),
    email: Yup.string()
      .email("Email is invalid!")
      .required("Email is required!"),
    password: Yup.string()
      .min(4, "Password must be minimum 4 characters!")
      .required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match!")
      .required("Confirm password is required!"),
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={validate}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur }) => (
          <div>
            <Form className="form p-3  w-96 ">
              <h1 className="font-bold text-5xl">Sign up</h1>
              <div>
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={values.firstName}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  required
                  className="border border-2 border-gray-200 rounded-full p-2 m-2"
                />
              </div>

              <div>
                <label htmlFor="lastName">Last Name</label>
                <input
                  id="lastName"
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={values.lastName}
                  onChange={handleChange}
                  className="border border-2 border-gray-200 rounded-full p-2 m-2"
                />
              </div>

              <div>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  required
                  placeholder="johnDoe@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  className="border border-2 border-gray-200 rounded-full p-2 m-2"
                />
              </div>

              <div>
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  placeholder="qwert@123"
                  value={values.password}
                  onChange={handleChange}
                  aria-describedby="passwordError"
                  className="border border-2 border-gray-200 rounded-full p-2 m-2"
                />
                <ErrorMessage
                  component="div"
                  name="password"
                  id="passwordError"
                  className="error"
                />
              </div>

              <div className="mb-2">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  id="confirmPassword"
                  className={` className="border border-2 border-gray-200 rounded-full p-2 m-2" form-control shadow-none ${
                    touched.confirmPassword &&
                    errors.confirmPassword &&
                    "is-invalid"
                  }`}
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password..."
                  value={values.confirmPassword}
                  onChange={handleChange}
                  aria-describedby="confirmPasswordError"
                />
                <ErrorMessage
                  component="div"
                  name="confirmPassword"
                  id="confirmPasswordError"
                  className="error"
                />
              </div>

              <button
                className="border-2 rounded-full p-2 hover:bg-gray-100 w-40 mr-auto ml-auto mb-6"
                type="submit"
              >
                Register
              </button>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
