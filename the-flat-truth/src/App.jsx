import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import loginPage from './pages/LoginPage';
import Post from './pages/Post';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import FlatEarthFacts from './pages/FlatEarthFacts';
import PageNotFound from './pages/FlatEarthFacts';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
export default App;
