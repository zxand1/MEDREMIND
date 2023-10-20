import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import AuthPage from './src/screens/AuthPage';
import RegisterPage from './src/screens/RegisterPage';
import React from "react";

export default function App() {
  const [register, setRegisterPage] = useState(false);

  return (
    <>
      <StatusBar style="auto" />
      {register ? <RegisterPage /> : <AuthPage />}
    </>
  );
}