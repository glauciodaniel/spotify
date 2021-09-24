import "./NavBar.css";
import LogoSpotify from "../LogoSpotify";
import MenuItem from "./MenuItem/MenuItem.js";
const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo-spotify">
        <LogoSpotify />
        <MenuItem />
      </div>
    </div>
  );
};
export default NavBar;
