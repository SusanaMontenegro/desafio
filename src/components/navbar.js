
import {Link, Outlet} from "react-router-dom";


function Navbar() {
  return (
    <>
    <nav className = "navbar"> 
      <ul>
        <li>
        <Link to="/">Zoo</Link>
          </li>
          <li>
            <Link to="/animal">Animal</Link>
          </li>
          <li>
            <Link to="/galeria">Galeria</Link>
          </li>
          
      </ul>
    </nav> 
        <Outlet />       
    </>
  );
}

export default Navbar;

