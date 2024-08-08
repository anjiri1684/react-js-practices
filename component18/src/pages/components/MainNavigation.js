import { Link, NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link
              to="/"
              className={({ isAcive }) =>
                isAcive ? classes.active : undefined
              }
            >
              Home
            </Link>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isAcive }) =>
                isAcive ? classes.active : undefined
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isAcive }) =>
                isAcive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
