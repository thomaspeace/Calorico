import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


const Navigation = () => {

  const { id } = useParams();

    const location = useLocation();
  
    const excludeMenuOnPaths = ['/']; 
  
    return (
      <div className=" navbar bg-base-100">
        <div className="flex-1">
            <Link to={'/'}>
                <a className="btn btn-ghost text-xl">Calorico</a>
            </Link>
        </div>
        <div className="flex-none">
          {!excludeMenuOnPaths.includes(location.pathname) && (
            <ul className="menu menu-horizontal pt-0">
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