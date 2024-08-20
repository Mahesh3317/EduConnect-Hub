import React, { useState } from 'react';
import styles from './Signup.module.css';
import backgroundImage from '../../assets/images/cool-triangles-sharp-edges-abstract-wallpaper-preview.jpg';

const FormComponent = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  const handleSignupClick = () => {
    setIsSignup(true);
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
            <form className={`${styles.form} ${!isSignup ? styles.activeForm : ''}`}>
              <div className={styles.field}>
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className={styles.field}>
                <input type="password" placeholder="Password" required />
              </div>
              <div className={styles.passLink}>
                <a href="#">Forgot password?</a>
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

            <form className={`${styles.form} ${isSignup ? styles.activeForm : ''}`}>
              <div className={styles.field}>
                <input type="text" placeholder="Name" required />
              </div>
              <div className={styles.field}>
                <input type="text" placeholder="Email Address" required />
              </div>
              <div className={styles.field}>
                <input type="password" placeholder="Password" required />
              </div>
              <div className={styles.field}>
                <input type="password" placeholder="Confirm password" required />
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
      </div>
    </div>
  );
};

export default FormComponent;
