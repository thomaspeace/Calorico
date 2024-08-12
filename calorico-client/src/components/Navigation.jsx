import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navigation = () => {
    const location = useLocation();
  
    const excludeMenuOnPaths = ['/']; 
  
    return (
      <div className="navbar bg-base-100">
        <div className="flex-1">
            <Link to={'/'}>
                <a className="btn btn-ghost text-xl">Calorico</a>
            </Link>
        </div>
        <div className="flex-none">
          {!excludeMenuOnPaths.includes(location.pathname) && (
            <ul className="menu menu-horizontal pt-0">
              <li><a>Stats</a></li>
              <li><a>Weight</a></li>
              <li><a>Calories</a></li>
            </ul>
          )}
        </div>
      </div>
    );
  };
  
  export default Navigation;