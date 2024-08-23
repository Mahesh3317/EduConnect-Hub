import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { auth, db } from '../../firebaseConfig'; // Import Firebase Auth and Firestore
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'; // Import needed functions
import { doc, getDoc, setDoc } from 'firebase/firestore'; // Import Firestore methods
import styles from './Signup.module.css';
import backgroundImage from '../../assets/images/cool-triangles-sharp-edges-abstract-wallpaper-preview.jpg';

const FormComponent = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [errorMessage, setErrorMessage] = useState(''); // State for error messages
  const navigate = useNavigate(); // Initialize navigate

  const handleLoginClick = () => {
    setIsSignup(false);
    setErrorMessage(''); // Clear errors on mode switch
  };

  const handleSignupClick = () => {
    setIsSignup(true);
    setErrorMessage(''); // Clear errors on mode switch
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;
    const confirmPassword = isSignup ? form.elements['confirmPassword'].value : null;
    const role = isSignup ? form.elements['role'].value : null; // Get role from the form

    if (isSignup && password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Save user data to Firestore
        await setDoc(doc(db, 'users', user.uid), {
          email: user.email,
          role: role,
        });

        setErrorMessage('Signup successful! Please log in.');
        setIsSignup(false); // Switch to login mode after successful signup
      } else {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // Fetch the user's role from Firestore
        const role = await fetchUserRole(user.uid);

        if (role) {
          // Redirect based on role
          if (role === 'teacher') {
            navigate('/teacher-dashboard');
          } else if (role === 'senate_member') {
            navigate('/senate-dashboard');
          } else if (role === 'student') {
            navigate('/student-dashboard');
          } else {
            setErrorMessage('User role not recognized.');
          }
        } else {
          setErrorMessage('Unable to retrieve user role.');
        }
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  // Function to fetch user role from Firestore
  const fetchUserRole = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', userId)); // Assuming 'users' is your collection name
      if (userDoc.exists()) {
        const userData = userDoc.data();
        console.log("User role:", userData.role); // Debugging log
        return userData.role; // Assuming 'role' is the field where the user's role is stored
      } else {
        console.log('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user role:', error);
      return null;
    }
  };

  return (
    <div className={styles.pageWrapper} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.wrapper}>
        <div className={styles.titleText}>
          <div className={`${styles.title} ${!isSignup ? styles.activeHeading : styles.inactiveHeading}`}>
            {isSignup ? 'Create a new Account' : 'Welcome Buddy'}
          </div>
        </div>

        <div className={styles.slideControls}>
          <div
            className={`${styles.slide} ${!isSignup ? styles.active : styles.inactive}`}
            onClick={handleLoginClick}
          >
            Login
          </div>
          <div
            className={`${styles.slide} ${isSignup ? styles.active : styles.inactive}`}
            onClick={handleSignupClick}
          >
            Signup
          </div>
          <div
            className={styles.sliderTab}
            style={{ transform: isSignup ? 'translateX(100%)' : 'translateX(0%)' }}
          />
        </div>

        <div className={styles.formContainer}>
          <div
            className={styles.formInner}
            style={{ transform: isSignup ? 'translateX(-50%)' : 'translateX(0%)' }}
          >
            <form className={`${styles.form} ${!isSignup ? styles.activeForm : ''}`} onSubmit={handleFormSubmit}>
              <div className={styles.field}>
                <input type="email" placeholder="Email Address" name="email" required />
              </div>
              <div className={styles.field}>
                <input type="password" placeholder="Password" name="password" required />
              </div>
              <div className={styles.passLink}>
                <Link to="/forgot-password">Forgot password?</Link>
              </div>
              <div className={styles.fieldBtn}>
                <input
                  type="submit"
                  value="Login"
                  className={isSignup ? styles.loginButtonInactive : styles.loginButton}
                />
              </div>
              <div className={styles.signupLink}>
                Don't have an account?{' '}
                <a href="#" onClick={handleSignupClick}>
                  Signup
                </a>
              </div>
            </form>

            <form className={`${styles.form} ${isSignup ? styles.activeForm : ''}`} onSubmit={handleFormSubmit}>
              <div className={styles.field}>
                <input type="text" placeholder="Name" name="name" required />
              </div>
              <div className={styles.field}>
                <input type="email" placeholder="Email Address" name="email" required />
              </div>
              <div className={styles.field}>
                <input type="password" placeholder="Password" name="password" required />
              </div>
              <div className={styles.field}>
                <input type="password" placeholder="Confirm password" name="confirmPassword" required />
              </div>
              <div className={styles.role}>
                <label>Select Your Role:</label>
                <div className={styles.radioGroup}>
                  <label>
                    <input type="radio" name="role" value="teacher" required />
                    <span>Teacher</span>
                  </label>
                  <label>
                    <input type="radio" name="role" value="senate_member" required />
                    <span>Student (Senate Member)</span>
                  </label>
                  <label>
                    <input type="radio" name="role" value="student" required />
                    <span>Student</span>
                  </label>
                </div>
              </div>
              <div className={styles.fieldBtn}>
                <input
                  type="submit"
                  value="Signup"
                  className={isSignup ? styles.signupButton : styles.signupButtonInactive}
                />
              </div>
              <div className={styles.signupLink}>
                Already have an account?{' '}
                <a href="#" onClick={handleLoginClick}>
                  Login
                </a>
              </div>
            </form>
          </div>
        </div>

        {errorMessage && <div className={styles.error}>{errorMessage}</div>} {/* Display error or success messages */}
      </div>
    </div>
  );
};

export default FormComponent;
