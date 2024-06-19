'use client';
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Link } from '@mui/material';
import NextLink from 'next/link';


const RegistrationPage: React.FC = () => {
  const [password, setPassword] = useState <string>('')
  const [email, setEmail] = useState <string>('')

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para processar os dados do formulário
    console.log(`Email: '${email}' and Password: '${password}' informed`)
  };

  console.log(email)
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Endereço de Email"
          name="email"
          autoComplete="email"
          autoFocus
          value={email}
          onChange={handleEmailChange}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="Senha"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        <Typography component="p" variant ="body1" mt={3}>
          Não possui cadastro? 
        <Link component={NextLink} href="/signup">faça aqui!</Link>
        </Typography> 
      </form>
    </Container>
  );
};

export default RegistrationPage;

