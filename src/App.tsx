// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RestaurantsList from './pages/RestaurantsList/RestaurantsList';
import Login from './pages/Login/Login';
import { useSelector } from 'react-redux';
import { RootState } from './redux/store';
import Navbar from './components/Navbar/Navbar';
import AlertBar from './components/AlertBar/AlertBar';


function App() {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isLoggedIn);
  console.log("into app")

  return (
    <>
   {isAuthenticated && <Navbar/>}
   <AlertBar /> {/* Include the AlertBar component */}

    <Router>
    <Routes>
      {/* Public Route: Login */}
      <Route path="/" element={isAuthenticated ? <Navigate to="/restaurants" /> : <Login />} />
      
      {/* Private Route: Restaurant List */}
      <Route path="/restaurants" element={isAuthenticated ? <RestaurantsList /> : <Navigate to="/" />} />

      {/* Fallback for any unknown routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </Router>
    </>
  );
}

export default App;
