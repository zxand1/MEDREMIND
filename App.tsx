import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import AuthPage from './screens/AuthPage';
import RegisterPage from './screens/RegisterPage';

export default function App() {
  const [register, setRegisterPage] = useState(true);

  return (
    <>
      <StatusBar style="auto" />
      {register ? <RegisterPage /> : <AuthPage />}
    </>
  );
}