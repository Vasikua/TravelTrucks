import css from "./Reviews.module.css";
import { useSelector } from "react-redux";
import { BookForm } from "../BookForm/BookForm";
import { selectCamper } from "../../redux/campers/selectors";
import icons from '../../images/sprite.svg';
import { useId } from "react";

export const Reviews = () => {
    const camper = useSelector(selectCamper);
    const stars = 5;
    const id = useId();
    return <>
        <div className={css.wrapper}>
            <ul className={css.reviews}>
                {camper.reviews.lenght > 0 ? (
                    camper.reviews.map((item) => 
                        <li className={css.item} key={id} >
                            <div className={css.title}>
                                {item.reviewer_name.charAt(0)}
                            </div>
                            <h3>{item.reviewer_name}</h3>
                            <div className={css.stars}>
                                {
                                    [...Array(stars)].map((_, Index) => (
                                        <svg  width="16" height="16"  fill={Index < item.reviewer_rating ? "#ffc531" : "#f2f4f7"}  key={id}>
                                            <use href={`${icons}#icon-Rating-1`} />
                                        </svg>
                                    ))
                                }
                            </div>
                            <p></p>
                        </li>
                        
                    )
                ):("no reviews")}
            </ul>
        </div>
    </>
}