import css from "./CamperDetails.module.css";
import { useSelector } from "react-redux";
import { selectCamper } from "../../redux/campers/selectors";
import icons from '../../images/sprite.svg';
import clsx from "clsx";
import { Reviews } from "../Reviews/Reviews";
import { Features } from "../Features/Features";
import { Navigate,NavLink, Router, Routes } from "react-router-dom";
import { SiPanasonic } from "react-icons/si";


export const CamperDetails=()=>{
    const camper = useSelector(selectCamper);
    const link = ({ isActive }) => {
        return clsx(css.link, isActive && css.activeLink)
    }
      const priceCar = camper.price.toFixed(2);
    return <>
        <h2 className={css.name}>{camper.name}</h2>
        <div className={css.wrapperLocationRating}>
            <div>
                        <svg width="16" height="16">
                             <use href={`${icons}#icon-Rating`} />
                        </svg>
                        {camper.rating}
                      {`(${camper.reviews.lenght} Reviews)`}
                    </div>
                    <div>
                        <svg width="20" height="20">
                            <use href={`${icons}#Map`} />
                        </svg>
                        {camper.location}
            </div>
            <div className={css.price}>
                        {priceCar}
            </div>
            <ul className={css.gallery}>
                {camper.gallery.lenght > 0 ? (
                    camper.gallery.map(img => (
                        <li key={img.id}>
                            <img className={css.img} src={img.thumb} alt="img camper" />
                        </li>
                         ))
                    ):( <span>Unfortunately, there are no images </span>  )}
            </ul>
            <div className={css.description}>
                {camper.description}
            </div>
        </div>
        <ul className={css.additionLinks}>
            <li className={css.detailItem}>
                <NavLink className={link} to="features">
                    features
                </NavLink>
            </li>
            <li className={css.detailItem}>
                <NavLink className={link} to="reviews">
                    reviews
                </NavLink>
            </li>
        </ul>
                    
        <Routes>
            <Router path="" element={<Features/>}></Router>
            <Router path="features" element={<Features/>}></Router>
            <Router path="reviews" element={<Reviews/>}></Router>
        </Routes>
    </>

}