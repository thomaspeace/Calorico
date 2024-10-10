import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  // extract  id from the url using a regex
  const match = location.pathname.match(/\/(users|weights|calories)\/(\d+)/);
  const id = match ? match[2] : null;  // match[2] contains the id

  const excludeMenuOnPaths = ['/'];

  return (
    <div className="navbar bg-base-200 bg-apple-300 h-10">
      <div className="flex-1">
        <Link to="/">
          <span className="btn btn-ghost text-xl my-0.5">Calorico</span>
        </Link>
      </div>
      <div className="flex-none">
        {!excludeMenuOnPaths.includes(location.pathname) && id && (
          <ul className="menu menu-horizontal">
            <li><Link to={`/users/${id}`}>User</Link></li>
            <li><Link to={`/weights/${id}`}>Weight</Link></li>
            <li><Link to={`/calories/${id}`}>Calories</Link></li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navigation;