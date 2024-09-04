import css from "./Navigation.module.css";
import { clsx } from "clsx";
import { NavLink } from "react-router-dom";
import icons from '../../images/sprite.svg';
export const Navigation = () =>{
    const getNavLink = ({ isActive }) => {
        return clsx(css.link, isActive && css.active)
    };
   
    return (<>
       
      
        <nav className={css.navigation}>
            <p className={css.logo}>
        <span role="img" aria-label="TravelTrucks">
            <svg width="136" height="16" >
             <use href={`${icons}#Logo`} />
            </svg>
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