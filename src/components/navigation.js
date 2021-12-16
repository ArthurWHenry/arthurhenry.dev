import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <Link to="/">arthurhenry.dev</Link>
      <Link to="/about">about</Link>
      <Link to="/projects">projects</Link>
    </nav>
  );
}

export default Navigation;
