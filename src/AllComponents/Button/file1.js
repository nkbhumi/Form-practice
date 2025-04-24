import React from 'react';
import { Button as MuiButton} from '@mui/material';
import { useFormikContext } from 'formik';

const Buttonwrap = ({
  children,
  ...otherProps
}) => {
  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  }

  const configButton = {
    variant: 'contained',
    color: 'primary',
    fullWidth: true,
    onClick: handleSubmit
  }

  return (
    <MuiButton {...configButton}>
      {children}
    </MuiButton>
  );
  };

export default Buttonwrap;