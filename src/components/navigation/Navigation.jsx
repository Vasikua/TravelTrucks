import css from "./Navigation.module.css";
import { clsx } from "clsx";
import { NavLink } from "react-router-dom";

export const Navigation = () =>{
    const getNavLink = ({ isActive }) => {
        return clsx(css.link, isActive && css.active)
    };
   
    return (<>
       
      
        <nav className={css.navigation}>
            <p className={css.logo}>
        <span role="img" aria-label="TravelTrucks">
                    <img srcSet="../../images/temp/Logo.svg"
                        src="../../images/temp/Logo.png" alt="TravelTrucks" />
        </span>
            </p>
            <div className={css.navigationMenu}></div>
            <NavLink className={getNavLink} to="/">
                Home
            </NavLink>
            <NavLink className={getNavLink} to="/catalog">
                Catalog
            </NavLink>
            </nav>
            </>
    )
}