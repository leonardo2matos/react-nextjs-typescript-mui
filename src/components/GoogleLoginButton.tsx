import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import Button from '@mui/material/Button';
import './GoogleLoginButton.css';

const GoogleLoginButton: React.FC = () => {
  const handleSuccess = (response: any) => {
    console.log('Google Login Successful:', response);
  };

  const handleError = () => {
    console.log('Google Login Failed');
  };

  return (
    <div className="google-login-button-wrapper">
      <GoogleOAuthProvider clientId="463111459818-7tasvpjt93gvgpj3e3hpsi4ockrbe769.apps.googleusercontent.com">
        <GoogleLogin
          onSuccess={handleSuccess}
          onError={handleError}
          containerProps={{ className: 'google-login-button' }}
        />
      </GoogleOAuthProvider>
      <Button
        fullWidth
        variant="contained"
        className="custom-google-login-button"
      >
        Sign in with Google
      </Button>
    </div>
  );
};

export default GoogleLoginButton;
