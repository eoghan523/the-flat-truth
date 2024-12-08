import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import Post from './pages/PostInDetail';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FlatEarthFacts from './pages/FlatEarthFacts';
import PageNotFound from './pages/PageNotFound';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/flatearthfacts" element={<FlatEarthFacts />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
