import React from 'react';
import { useForm } from 'react-hook-form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './Signup.css';

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const auth = getAuth();

  const onSubmit = async (data) => {
    try {
      await createUserWithEmailAndPassword(auth, data.email, data.password);
      alert('User signed up successfully!');
    } catch (error) {
      alert(error.message);
    }
  };

  const password = watch('password', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>Username</label>
        <input {...register('username', { required: true })} />
        {errors.username && <p>Username is required</p>}
      </div>
      <div>
        <label>Email</label>
        <input type="email" {...register('email', { required: true })} />
        {errors.email && <p>Email is required</p>}
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register('password', {
          required: 'Password is required',
          minLength: { value: 8, message: 'Password must be at least 8 characters' },
          pattern: {
            value: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/,
            message: 'Password must contain an uppercase letter, a number, and a special character'
          }
        })} />
        {errors.password && <p>{errors.password.message}</p>}
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;
