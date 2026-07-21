import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { UserStorage } from './context/UserContext';
import User from './pages/User/User';
import ProtectedRoute from './helpers/ProtectedRoute';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <UserStorage>
          <div className="app">
            <Header />
            <main className="app-content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="login/*" element={<Login />} />
                <Route
                  path="conta/*"
                  element={
                    <ProtectedRoute>
                      <User />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </UserStorage>
      </BrowserRouter>
    </>
  );
};

export default App;
