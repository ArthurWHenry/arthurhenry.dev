import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-4xl mx-auto p-3">
      <div>
        <NavLink className="font-bold text-2xl text-gray-900" to="/">
          Arthur Henry
        </NavLink>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
        {/* <NavLink className="nav-link" to="/blog">
          Blog
        </NavLink> */}
        <NavLink className="nav-link" to="/projects">
          Projects
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
