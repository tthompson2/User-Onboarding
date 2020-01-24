import React from 'react'
import ReactDom from "react-dom";
import Axios from 'axios';
import * as Yup from 'yup';
import { withFormik, Form, Field } from 'formik';

const WebForm = ({ }) => {

    return (
        <div>
            <Form>
                <label>
                  Name:
                  <Field
                     name="username"
                  />
                </label>
                <label>
                    Email:
                    <Field
                      email="email" 
                    />
                </label>
                <label>
                    Password:
                    <Field
                      type="password"
                      password="password"
                    />
                </label>
                <label>
                    Terms of Service:
                    <input
                      name="TOS"
                      type="checkbox"
                    />
                </label>
                <Field>

                </Field>
            </Form>
            <button>Submit</button>
        </div>
    )

}

const FormikLoginForm = withFormik({
    mapPropsToValues({username, email, password}) {
        return {
            username: username || "",
            email: email || "",
            password: password || ""
        };
    },

    validatinSchema: Yup.object().shape({
        email: Yup.string()
        .email()
        .required(),
        password: Yup.string()
        .min(6)
        .required(),
        username: Yup.string()
        .min(1)
        .required()
    }),

    handleSubmit(values) {
        console.log(values);

        // this is where the form submission code is supposed to go...
    }
}) (WebForm);

export default FormikLoginForm;