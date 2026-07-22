import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { UserStorage } from './context/UserContext';
import User from './pages/User/User';
import ProtectedRoute from './helpers/ProtectedRoute';
import Photo from './components/Photo/Photo';
import UserProfile from './pages/UserProfile/UserProfile';
import NotFound from './pages/NotFound/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
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
                <Route path="foto/:id" element={<Photo />} />
                <Route path="perfil/:user" element={<UserProfile />} />
                <Route path="*" element={<NotFound />} />
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
