// src/components/Auth/Login.js
import React from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const auth = getAuth();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Email</label>
        <input {...register('email', { required: true })} />
        {errors.email && <p>Email is required</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password && <p>Password is required</p>}
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
