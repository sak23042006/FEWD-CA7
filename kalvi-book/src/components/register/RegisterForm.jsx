import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./register.css";
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const RegisterForm = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [isRegistered, setIsRegistered] = useState(false);

  const onSubmit = (data) => {
    // Handle form submission logic here
    if (Object.keys(errors).length === 0) {
      // Form submitted successfully
      setTimeout(()=>{
        location.href = "/"
      },3000)
      toast.success("Form submitted successfully!");
      // Add your logic here to handle the successful form submission
      setIsRegistered(true);
    } else {

      // Form not submitted due to validation errors
      toast.error("Form not submitted. Please fix the errors.");
    }
    console.log(data);




  };

  return (
    <div className='form-container'>
      <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register Now</h2>

      <br/>

      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          {...register('name', { required: 'Name is required', minLength: { value: 3, message: 'Name should be at least 3 characters' }, maxLength: { value: 30, message: 'Name should not exceed 30 characters' } })}
        />
        {errors.name && <p>{errors.name.message}</p>}
      </div>

      <br />

      <div>
        <label>Email</label>
        <input
          type="text"
          name="email"
          {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' } })}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <br />

      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register('password', { required: 'Password is required', minLength: { value: 10, message: 'Password should be at least 10 characters' }, pattern: { value: /^(?=.*[!@#$%^&*])/, message: 'Password should contain at least one special character' } })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </div>

      <br />

      <div>
        <label>Repeat Password</label>
        <input
          type="password"
          name="repeatPassword"
          {...register('repeatPassword', { required: 'Repeat Password is required', validate: value => value === watch('password') || 'Passwords do not match' })}
        />
        {errors.repeatPassword && <p>{errors.repeatPassword.message}</p>}
      </div>

      <br />

      <button type="submit">Sign Up</button>
      <ToastContainer />
    </form>
    </div>
  );
};

export default RegisterForm;
