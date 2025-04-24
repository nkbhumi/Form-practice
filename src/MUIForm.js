import React from 'react';
import Head from './AllComponents/Head/file4';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Container, Grid, Typography, Paper, Box } from '@mui/material';
import Textfield from './AllComponents/Textfield/file6';
import Select from './AllComponents/Select/file5';
import DateTimePicker from './AllComponents/DataTimePicker/file3';
import Checkbox from './AllComponents/Checkbox/file2';
import Button from './AllComponents/Button/file1';
import countries from './countrydata/countries.json';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  addressLine1: '',
  addressLine2: '',
  city: '',
  state: '',
  country: '',
  arrivalDate: '',
  departureDate: '',
  message: '',
  termsOfService: false
};

const form = Yup.object().shape({
  firstName: Yup.string().required('Required'),
  lastName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email.').required('Required'),
  phone: Yup.number().integer().typeError('Please enter a valid phone number').required('Required'),
  addressLine1: Yup.string().required('Required'),
  addressLine2: Yup.string(),
  city: Yup.string().required('Required'),
  state: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  arrivalDate: Yup.date().required('Required'),
  departureDate: Yup.date().required('Required'),
  message: Yup.string(),
  termsOfService: Yup.boolean().oneOf([true], 'You must accept the terms').required('Required'),
});

const MUIForm = () => {
  return (
    <Container maxWidth="md">
      <Head />

      <Paper elevation={3} sx={{ p: 4, mt: 5, mb: 8 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Booking Form
        </Typography>

        <Formik
          initialValues={{ ...initialState }}
          validationSchema={form}
          onSubmit={(values) => console.log(values)}
        >
          <Form>
            <Typography variant="h6" gutterBottom>Your Details</Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}><Textfield name="firstName" label="First Name" fullWidth /></Grid>
              <Grid item xs={12} sm={6}><Textfield name="lastName" label="Last Name" fullWidth /></Grid>
              <Grid item xs={12}><Textfield name="email" label="Email" fullWidth /></Grid>
              <Grid item xs={12}><Textfield name="phone" label="Phone" fullWidth /></Grid>
              <Grid item xs={12}><Typography variant="h6" gutterBottom>Address</Typography></Grid>
              <Grid item xs={12}><Textfield name="addressLine1" label="Address Line 1" fullWidth /></Grid>
              <Grid item xs={12}><Textfield name="addressLine2" label="Address Line 2" fullWidth /></Grid>
              <Grid item xs={12} sm={6}><Textfield name="city" label="City" fullWidth /></Grid>
              <Grid item xs={12} sm={6}><Textfield name="state" label="State" fullWidth /></Grid>
              <Grid item xs={12}><Select name="country" label="Country" options={countries} fullWidth /></Grid>
            </Grid>

            <Box mt={4}>
              <Typography variant="h6" gutterBottom>Booking Information</Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}><DateTimePicker name="arrivalDate" label="Arrival Date" fullWidth /></Grid>
                <Grid item xs={12} sm={6}><DateTimePicker name="departureDate" label="Departure Date" fullWidth /></Grid>
              </Grid>
            </Box>

            <Box mt={4}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                  <Textfield name="message" label="Message" multiline rows={4} fullWidth />
                </Grid>
                <Grid item xs={12} md={4}>
                  <Checkbox name="termsOfService" legend="Terms Of Service" label="I agree" />
                </Grid>
              </Grid>
            </Box>

            <Box mt={4}>
              <Button variant="contained" color="primary" fullWidth>
                Submit Form
              </Button>
            </Box>
          </Form>
        </Formik>
      </Paper>
    </Container>
  );
};

export default MUIForm;
