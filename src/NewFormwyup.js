import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
    name: Yup.string().required('Your name is required'),
    email: Yup.string().email('Invalid email').required('Your email is required'),
    password: Yup.string().min(8, 'Password must be atleast 8 characters').required('Your password is required')
});

function NewFormwyup() {
  return (
    <Formik
        initialValues={{ name:"", email:"", password:""}}
        validationSchema={validationSchema}
        onSubmit={(values) => {
            console.log('Form values: ', values);
        }}
        >

        { ({errors, touched }) => (
        <Form>
            <div>
                <label>Name:</label><br/>
                <Field name="name" />
                {errors.name && touched.name && <div style={{color:'red'}}>{errors.name}</div>}
            </div>
            <div>
                <label>Email:</label><br/>
                <Field name="email" />
                {errors.email && touched.email && <div style={{color:'red'}}>{errors.email}</div>}
            </div>
            <div>
                <label>Password:</label><br/>
                <Field name="password" />
                {errors.password && touched.password && <div style={{color:'red'}}>{errors.password}</div>}
            </div>
            <button type="submit">Submit</button>
        </Form>)}
    </Formik>
  );
}

export default NewFormwyup;
