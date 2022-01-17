import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import About from './pages/about';
// import Blog from './pages/blog';
import Home from './pages/home';
import NotFound from './pages/notfound';
import Projects from './pages/projects';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/about" element={<About />} />
        <Route default path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
