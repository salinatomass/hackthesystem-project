import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../context/providers/AuthContext';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Layout from '../components/Layout';
import Theory from "../pages/Theory";
import Exercise from "../pages/Excercise";

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="*" element={<NotFound />} />
            <Route exact path="/" element={<Home />} />
            <Route exact path="/auth/register" element={<Register />} />
            <Route exact path="/auth/login" element={<Login />} />
            <Route exact path="/theory" element={<Theory />} />
            <Route exact path="/exercises" element={<Exercise />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
