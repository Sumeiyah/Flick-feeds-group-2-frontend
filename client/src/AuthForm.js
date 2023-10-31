import React, { useState } from 'react';
import './AuthForm.css';

const AuthForm = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSwitchForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-popup">
      <div className="auth-popup-content">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          {!isLogin && <input type="password" placeholder="Confirm Password" />}
          <button>{isLogin ? 'Login' : 'Sign Up'}</button>
        </form>
        <p onClick={handleSwitchForm}>
          {isLogin ? 'Don\'t have an account? Sign Up' : 'Already have an account? Login'}
        </p>
        <button className="close-button" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default AuthForm;
