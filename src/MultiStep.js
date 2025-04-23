import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';

function MultiStep() {
    const [step, setStep] = useState(1);

    const personalSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        age: Yup.number().required('Age is required').positive().integer(),
        contact: Yup.number().required('Contact is required').positive().integer(),
    });

    const addressSchema = Yup.object({
        state: Yup.string().required('State is required'),
        city: Yup.string().required('City is required'),
        country: Yup.string().required('Country is required'),
    });

    const initialValues = {
        name: '',
        age: '',
        contact: '',
        state: '',
        city: '',
        country: '',
    };

    const handleNext = (values, actions) => {
        if (step === 1) {
            personalSchema.validate(values, { abortEarly: false })
                .then(() => setStep(2))
                .catch(err => {
                    const errors = {};
                    err.inner.forEach(error => {
                        errors[error.path] = error.message;
                    });
                    actions.setErrors(errors);
                });
        } else if (step === 2) {
            addressSchema.validate(values, { abortEarly: false })
                .then(() => {
                    alert(JSON.stringify(values, null, 2));
                    actions.resetForm();
                    setStep(1);
                })
                .catch(err => {
                    const errors = {};
                    err.inner.forEach(error => {
                        errors[error.path] = error.message;
                    });
                    actions.setErrors(errors);
                });
        }
    };

    return (
        <Formik initialValues={initialValues} onSubmit={() => { }}>
            {({ values, errors, touched, handleSubmit, setErrors }) => (
                <Form>
                    {step === 1 && (
                        <>
                            <h3>About You</h3>
                            <label>Name:</label><br />
                            <Field name="name" /><br />
                            {errors.name && touched.name && <div style={{ color: 'red' }}>{errors.name}</div>}
                            <br />
                            <label>Age:</label><br />
                            <Field name="age" type="number" /><br />
                            {errors.age && touched.age && <div style={{ color: 'red' }}>{errors.age}</div>}
                            <br />
                            <label>Contact:</label><br />
                            <Field name="contact" type="number" /><br />
                            {errors.contact && touched.contact && <div style={{ color: 'red' }}>{errors.contact}</div>}
                        </>
                    )}

                    {step === 2 && (
                        <>
                            <h3>Your Location</h3>
                            <label>State:</label><br />
                            <Field name="state" /><br />
                            {errors.state && touched.state && <div style={{ color: 'red' }}>{errors.state}</div>}
                            <br />
                            <label>City:</label><br />
                            <Field name="city" /><br />
                            {errors.city && touched.city && <div style={{ color: 'red' }}>{errors.city}</div>}
                            <br />
                            <label>Country:</label><br />
                            <Field name="country" /><br />
                            {errors.country && touched.country && <div style={{ color: 'red' }}>{errors.country}</div>}
                        </>
                    )}

                    <br />
                    <button type="button" onClick={() => handleNext(values, { setErrors })}>
                        {step === 1 ? 'Next' : 'Submit'}
                    </button>
                </Form>
            )}
        </Formik>
    );
}

export default MultiStep;