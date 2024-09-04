import { useSelector, useDispatch } from "react-redux";
import { useState,  useEffect  } from "react";
import { getAllCampers } from "../../redux/campers/operations";
import css from "./CatalogList.module.css";
import { Camper } from "../Camper/Camper";
import { LoadMoreBtn } from "../Button/LoadMoreBtn/LoadMoreBtn";
import { selectFilteredCampers } from "../../redux/filter/selectors";


export const CatalogList = () => {
    const [pagination, setPagination] = useState(4);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllCampers());
    },
        [dispatch]);
    
    const filteredCamps = useSelector(selectFilteredCampers);
    
    useEffect(() => {
        setPagination(4);
    }, [filteredCamps]);
    
    const campers = filteredCamps.slice(0,pagination);
    const loadMore = () => {
        setPagination((onPage) => onPage + 4)};
    return <>
       
            <ul className={css.camperList}>
               {campers.map((camper) => (
                    <li key={camper.id} className={css.camperItem}>
                            <Camper camper={camper} />
                   </li>
               ))}
            </ul>
        <LoadMoreBtn onClick={loadMore} />
    </>
}
