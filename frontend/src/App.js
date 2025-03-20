import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './public/webpages/Home';
import NotFound from './public/webpages/NotFound';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> <br></br>
        <Link to="/categories">Categories</Link> <br></br> 
        <Link to="/leaderboards">leaderboards</Link> <br></br> 
        <Link to="/profile">My Profile</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> {/* 404 Page */}
      </Routes>
    </Router>
  );
}
export default App;
