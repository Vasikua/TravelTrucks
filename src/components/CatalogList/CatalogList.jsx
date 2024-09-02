import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllCampers } from "../../redux/campers/operations";
import css from "./CatalogList.module.css";
import { Camper } from "../Camper/Camper";
// import { selectFilteredCampers } from "../../redux/campers/selectors";

export const CatalogList = () => { 
    const dispatch = useDispatch();
    useEffect(() => {
    dispatch(getAllCampers());
    }, [dispatch]);
    const campers = useSelector(state => state.campers.items.items)
    console.log(campers);
    return <>
            <ul className={css.camperList}>
               {campers.map((camper) => (
                    <li key={camper.id} className={css.camperItem}>
                            <Camper camper={camper} />
                   </li>
               ))}
            </ul>
            
    </>
}
