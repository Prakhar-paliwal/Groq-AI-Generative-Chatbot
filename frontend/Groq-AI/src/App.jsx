import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import { useAuth } from './context/AuthContext';

function App() {
  const auth = useAuth();
  console.log(auth?.isLoggedIn);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {
        auth?.isLoggedIn && auth.user && 
        (<Route path="/chat" element={<Chat/>}/>)
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
