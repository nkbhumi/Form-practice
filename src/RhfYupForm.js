import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required')
});

function RhfYupForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log('Form is submitted:', data);
    reset(); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Your Name:</label><br/>
        <input {...register('name')} />
        {errors.name && <span style={{ color: 'red' }}>{errors.name.message}</span>}
      </div>

      <div>
        <label>Email:</label><br/>
        <input {...register('email')} />
        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
      </div>

      <div>
        <label>Password:</label><br/>
        <input type="password" {...register('password')} />
        {errors.password && <span style={{ color: 'red' }}>{errors.password.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
}

export default RhfYupForm;
