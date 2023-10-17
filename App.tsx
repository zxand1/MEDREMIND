import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';

import AuthPage from './screens/AuthPage';
import Register from './screens/Register';

export default function App() {
  const [register, setRegister] = useState(true);

  return (
    <>
      <StatusBar style="auto" />
      {register ? <Register /> : <AuthPage />}
    </>
  );
}