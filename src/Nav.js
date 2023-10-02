import { NavLink } from "react-router-dom";
import "./Nav.css"
/**
 * Nav: Renders Navbar with dog names as links
 *
 * props:
 * - dogNames: [name, ...]
 *
 * DogFinderApp->Nav
 */
function Nav({ dogNames }) {
  return (
    <div className="Nav">
      <NavLink to={"/"}>Home</NavLink>
      {dogNames.map(d => <NavLink key={d} to={`/dogs/${d}`} > {d}</NavLink>)}
    </div>
  );
}

export default Nav;
