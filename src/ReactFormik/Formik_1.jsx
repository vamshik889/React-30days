import React from "react";

import { useFormik, Formik, Form, Field } from "formik";
import { signUpSchema } from "./Schema";

const initialValues = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
};

const Formik_1 = () => {
  const onSubmit = (values, actions) => {
    console.log(values);
    actions.resetForm();
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched }) => (
          <Form className="signup_form">
            <div>
              <label htmlFor="" style={{ marginRight: "100px" }}>
                Name
              </label>
              {/* <input
              type="text"
              name="name"
              value={values.name}
              onBlur={handleBlur}
              onChange={handleChange}
            /> */}
              {/* Field component is replacement for input */}
              <Field type="text" name="name" placeholder="Enter your name" />
              {errors.name && touched.name && (
                <p className="error">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="" style={{ marginRight: "100px" }}>
                Email
              </label>
              <Field type="email" name="email" />

              {errors.email && touched.email && (
                <p className="error">{errors.email}</p>
              )}
            </div>
            <div>
              <label htmlFor=" " style={{ marginRight: "100px" }}>
                Password
              </label>
              <Field type="password" name="password" />

              {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
              )}
            </div>

            <div>
              <label htmlFor="" style={{ marginRight: "40px" }}>
                Confirm Password
              </label>
              <Field type="password" name="cpassword" />

              {errors.cpassword && touched.cpassword && (
                <p className="error">{errors.cpassword}</p>
              )}
            </div>
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Formik_1;
