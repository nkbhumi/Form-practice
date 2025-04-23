import React from 'react';
import { useForm } from 'react-hook-form';

function RHFForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data) => {
    console.log('Form Submitted:', data);
    reset(); // clears form
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>UserName:</label><br/>
        <input {...register('uname', { required: 'UserName is required' })} />
        {errors.uname && <span style={{color: 'red'}}>{errors.uname.message}</span>}
      </div>
      <br />    

      <div>
        <label>Email:</label><br/>
        <input {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email format' }})} />
        {errors.email && <span style={{color: 'red'}}>{errors.email.message}</span>}
      </div>

      <br />

      <div>
        <label>Password:</label><br/>
        <input type="password" {...register('password', { required: 'Password is required', minLength: { value: 8, message: 'Password must be at least 8 characters' }})} />
        {errors.password && <span style={{color: 'red'}}>{errors.password.message}</span>}
      </div>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RHFForm;
