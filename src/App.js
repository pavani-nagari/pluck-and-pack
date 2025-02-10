import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Notice the use of Navigate
import Welcome from './components/Welcome';
import ListShoppers from './components/ListShoppers';
import Aldi from './components/Aldi';
import PaymentPage from './components/payments';
import Walmart from './components/Walmart';
import Login from './components/login';
import Wendys from './components/Wendys';
import PatelBrothers from './components/Patelbrothers';
import Walgreens from './components/Walgreens';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isShopping, setIsShopping] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);  // Login successful
  };

  const handleStartShopping = () => {
    setIsShopping(true);  // User has started shopping
  };
  document.body.style.backgroundColor = '#ffe8f5';

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for Login page (this is the home page) */}
          <Route path="/" element={<Login onLogin={handleLogin} />} />

          {/* Protected Route for Dashboard */}
          <Route
            path="/dashboard"
            element={isLoggedIn ? (
              isShopping ? <ListShoppers /> : <Welcome onStartShopping={handleStartShopping} />
            ) : (
              <Navigate to="/" />  // Redirect to login page if not logged in
            )}
          />

          {/* Other routes */}
          <Route path="/aldi" element={<Aldi />} />
          <Route path="/walgreens" element={<Walgreens />} />
          <Route path="/walmart" element={<Walmart />} />
          <Route path="/wendys" element={<Wendys />} />
          <Route path="/patelbrothers" element={<PatelBrothers />} />
          <Route path="/payment" element={<PaymentPage />} />

          {/* Redirect to login page for any unrecognized paths */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
