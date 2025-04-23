import React from 'react';
import { Formik, Form, Field } from 'formik';

function NewForm() {
  return (
    <Formik
        initialValues={{ name:"", email:"", password:""}}
        validate = { values => {
            const errors = {};

            if(!values.name){
                errors.name = "Name is required";
            }
            if(!values.email){
                errors.email = "Email is required";
            }
            else if(!/\S+@\S+\.\S+/.test(values.email)) {
                errors.email = "Invalid email format0";
            }
            if(!values.password){
                errors.password = "Password required";
            }
            else if(values.password.length < 10){
                errors.password = "Password must be at least 10 characters";
            }

            return errors;
        }}
        
        onSubmit={(values, {setSubmitting, resetForm }) => {
            console.log('Form Data : ', values);
            setSubmitting(false);
            resetForm();            
        }}>

        { ({isSubmitting, errors, touched }) => (
        <Form>
            <div>
                <label>Name:</label><br/>
                <Field type="text" name="name" />
                {errors.name && touched.name && <div style={{color:'red'}}>{errors.name}</div>}
            </div>
            <div>
                <label>Email:</label><br/>
                <Field type="email" name="email" />
                {errors.email && touched.email && <div style={{color:'red'}}>{errors.email}</div>}
            </div>
            <div>
                <label>Password:</label><br/>
                <Field type="password" name="password" />
                {errors.password && touched.password && <div style={{color:'red'}}>{errors.password}</div>}
            </div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
        </Form>)}
    </Formik>
  );
}

export default NewForm;
