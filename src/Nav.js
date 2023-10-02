import { NavLink } from "react-router-dom";
/**
 * Renders Navbar with dog names as links
 */
function Nav({ dogNames }) {
  return (
    <div className="Nav">
      {dogNames.map(d => <NavLink to={`/dogs/${d}`} > {d}</NavLink>)}
    </div>
  );
}

export default Nav;