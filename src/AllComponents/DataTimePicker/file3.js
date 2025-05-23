import React from 'react';
import { TextField } from '@mui/material';
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers';
import { useField } from 'formik';

const DateTimePickerwrap = ({
  name,
  ...otherProps
}) => {
  const [field, meta] = useField(name);

  const configDateTimePicker = {
    ...field,
    ...otherProps,
    type: 'date',
    variant: 'outlined',
    fullWidth: true,
    InputLabelProps: {
      shrink: true
    }
  };

  if(meta && meta.touched && meta.error) {
    configDateTimePicker.error = true;
    configDateTimePicker.helperText = meta.error;
  }

  return (
    <TextField
      {...configDateTimePicker}
    />
  );
};

export default DateTimePickerwrap;