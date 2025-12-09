import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f0f0f0'
    }}>
      <div style={{
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        width: '350px',
        textAlign: 'center'
      }}>
        <h1 style={{ marginBottom: '20px' }}>Forgot Password</h1>
        <p style={{ marginBottom: '20px', color: '#666' }}>
          Enter your email to reset your password
        </p>
        
        <input 
          type="email" 
          placeholder="you@example.com"
          style={{
            width: '100%',
            padding: '12px',
            marginBottom: '20px',
            borderRadius: '25px',
            border: '1px solid #ccc'
          }}
        />
        
        <button style={{
          width: '100%',
          padding: '12px',
          backgroundColor: '#000',
          color: 'white',
          border: 'none',
          borderRadius: '25px',
          marginBottom: '20px',
          cursor: 'pointer'
        }}>
          Send Reset Link
        </button>
        
        <div>
          <Link to="/login" style={{ color: '#555', textDecoration: 'none' }}>
            ← Back to Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;