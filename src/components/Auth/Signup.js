import React, { useState } from 'react';
import styles from './Signup.module.css';
import backgroundImage from 'D:/Users/MaheshS/Desktop/react/singhaniaschool/src/assets/images/belinda-fewings-6wAGwpsXHE0-unsplash.jpg';

const FormComponent = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleLoginClick = () => {
    setIsSignup(false);
  };

  const handleSignupClick = () => {
    setIsSignup(true);
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.imageContainer}>
        <img src={backgroundImage} alt="Welcome" className={styles.image} />
      </div>

      <div className={styles.wrapper}>
        <div className={styles.titleText}>
          <div className={`${styles.title} ${!isSignup ? styles.active : ''}`}>
            {isSignup ? 'Create a new Account' : 'Welcome Buddy'}
          </div>
        </div>

        <div className={styles.slideControls}>
          <div
            className={`${styles.slide} ${!isSignup ? styles.activeSlide : ''}`}
            onClick={handleLoginClick}>
            Login
          </div>
          <div
            className={`${styles.slide} ${isSignup ? styles.activeSlide : ''}`}
            onClick={handleSignupClick}>
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
            style={{ transform: isSignup ? 'translateX(-50%)' : 'translateX(0%)' }}>
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
                <div className={styles.btnLayer}></div>
                <input type="submit" value="Login" />
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

              <div className={styles.field}>
                <label>Select Your Role:</label>
                <div className={styles.radioGroup}>
                  <label>
                    <input type="radio" name="role" value="teacher" required />
                    Teacher
                  </label>
                  <label>
                    <input type="radio" name="role" value="senate_member" required />
                    Student (Senate Member)
                  </label>
                  <label>
                    <input type="radio" name="role" value="student" required />
                    Student
                  </label>
                </div>
              </div>

              <div className={styles.fieldBtn}>
                <div className={styles.btnLayer}></div>
                <input type="submit" value="Signup" />
              </div>
              <div className={styles.signupLink}>
                <a href="#">Already have an account? Login</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
