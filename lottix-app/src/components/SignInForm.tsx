import React, { useState } from "react";
import styled from 'styled-components';

// Main Component
const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign in attempt with:', { email, password, rememberMe });
    // Add authentication logic here
  };

  return (
    <FormContainer>
      <Title>Sign In</Title>
      <Subtitle>to enter concert raffles and track your entries</Subtitle>
      
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input 
            type="email" 
            id="email" 
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input 
            type="password" 
            id="password" 
            placeholder="••••••••" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </FormGroup>
        
        <RememberMeContainer>
          <CheckboxLabel>
            <Checkbox 
              type="checkbox" 
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember me
          </CheckboxLabel>
          <ForgotPassword href="#">Forgot password?</ForgotPassword>
        </RememberMeContainer>
        
        <SignInButton type="submit">Sign In</SignInButton>
      </form>
      
      <OrDivider>Or sign in with</OrDivider>
      
      <SocialButtonsContainer>
        <SocialButton type="button">Google</SocialButton>
        <SocialButton type="button">Apple</SocialButton>
        <SocialButton type="button">Facebook</SocialButton>
      </SocialButtonsContainer>
      
      <SignUpContainer>
        Don't have an account?
        <SignUpLink href="#">Sign Up</SignUpLink>
      </SignUpContainer>
    </FormContainer>
  );
};

export default SignInForm;


// Styled Components
const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.25rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #8a2be2;
    box-shadow: 0 0 0 2px rgba(138, 43, 226, 0.1);
  }
`;

const RememberMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.25rem;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Checkbox = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
`;

const ForgotPassword = styled.a`
  color: #8a2be2;
  text-decoration: none;
  font-size: 0.875rem;

  &:hover {
    text-decoration: underline;
  }
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 0.875rem;
  background-color: #8a2be2;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #7823c7;
  }
`;

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  color: #888;
  font-size: 0.875rem;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #ddd;
  }

  &::before {
    margin-right: 1rem;
  }

  &::after {
    margin-left: 1rem;
  }
`;

const SocialButtonsContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
`;

const SocialButton = styled.button`
  flex: 1;
  padding: 0.75rem;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
`;

const SignUpLink = styled.a`
  color: #8a2be2;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;