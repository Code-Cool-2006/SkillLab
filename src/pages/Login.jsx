import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      alert("Email is required");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter valid email");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    if (!isLogin && password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    alert(isLogin ? "Login Successful" : "Signup Successful");
    
    if (isLogin) {
      navigate("/home");
    } else {
      setIsLogin(true);
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <div className="form-toggle">
          <button 
            className={isLogin ? "active" : ""} 
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={!isLogin ? "active" : ""} 
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {isLogin ? (
          <form className="form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <a href="#">Forgot password?</a>
            <button type="submit">Login</button>
            <p>
              Don't have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(false); }}>
                Sign Up
              </a>
            </p>
          </form>
        ) : (
          <form className="form" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
            <p>
              Already have an account?{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); setIsLogin(true); }}>
                Login
              </a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default Login;