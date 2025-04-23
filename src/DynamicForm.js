import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import * as Yup from 'yup';

function DynamicForm() {
    const initialValues = {
        skills: [''],
        sports: ['']
      };
    
      const validationSchema = Yup.object({
        skills: Yup.array().of(Yup.string().required('Skill cannot be empty')),
        sports: Yup.array().of(Yup.string().required('Sports cannot be empty'))
      });
    
      const onSubmit = (values) => {
        console.log('Submitted Data:', values);
      };

      return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ values, errors, touched }) => (
            <Form>
              <h3>Skills:</h3>
              <FieldArray name="skills">
                {({ push, remove }) => (
                  <>
                    {values.skills.map((skill, index) => (
                      <div key={index}>
                        <Field name={`skills[${index}]`} placeholder="Enter skill" />
                        {errors.skills && errors.skills[index] && touched.skills && touched.skills[index]
                        ? (
                          <div style={{ color: 'red' }}>{errors.skills[index]}</div>
                        ) : null}
                        <button type="button" onClick={() => remove(index)} style={{ marginLeft: '10px' }}>Remove</button>
                      </div>
                    ))}
                    <br />
                    <button type="button" onClick={() => push('')}>Add Skill</button>
                  </>
                )}
              </FieldArray>
              <br />

              <h3>Fav Sports:</h3>
              <FieldArray name="sports">
                {({ push, remove }) => (
                  <>
                    {values.sports.map((sport, index) => (
                      <div key={index}>
                        <Field name={`sports[${index}]`} placeholder="Enter sports" />
                        {errors.sports && errors.sports[index] && touched.sports && touched.sports[index]
                        ? (
                          <div style={{ color: 'red' }}>{errors.sports[index]}</div>
                        ) : null}
                        <button type="button" onClick={() => remove(index)} style={{ marginLeft: '10px' }}>Remove</button>
                      </div>
                    ))}
                    <br />
                    <button type="button" onClick={() => push('')}>Add Sports</button>
                  </>
                )}
              </FieldArray>
    
              <br /><br />
              <button type="submit">Submit</button>
            </Form>
          )}
        </Formik>
      );

}

export default DynamicForm;