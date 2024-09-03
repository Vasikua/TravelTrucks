import  css  from "./SearchBtn.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { changeFilter } from "../../../redux/filter/slice";
// import {
//     selectACFilter,
//     selectAutomaticFilter,
//     selectBathroomFilter,
//     selectKitchenFilter,
//     selectTVFilter,
//     selectVanFilter,
//     selectFullyIntegratedFilter,
//     selectAlcovFilter,
//     } from "../../../redux/filter/selectors";

export const SearchBtn = () => {
    // const dispatch = useDispatch();
    // const filter = useSelector();

    const handleSearch = () => { }
        // const searchRes = e.target.value;
        // dispatch(changeFilter(searchRes));
    // }
    return <>
        <button
            className={css.SearchBtn}
            onClick={handleSearch}
        >
            <span className={css.text}>
                Search
            </span>
     </button>
</>   
}