import SearchLocation from '../SearchLocation/SearchLocation';
import {VehicleEquipment} from '../VehicleEquipment/VehicleEquipment';
import VehicleType from '../VahicleType/VahicleType';
import { SearchBtn } from '../Button/SearchBtn/SearchBtn';
import css from './Filters.module.css';
// import { useDispatch,useSelector } from 'react-redux';
// import { changeFilter } from '../../redux/filter/slice';
// import { selectNameFilter } from '../../redux/filter/selectors';

export const Filters = ()=> {
    // const dispatch = useDispatch();
    //   const filter = useSelector(selectNameFilter);
    // const handleSearch = (e) => {
    //     const searchRes = e.target.value;
    //     dispatch(changeFilter(searchRes));
    // }
       
    return (

        <div className={css.wrapper}>
            <SearchLocation />  
            <p>filters</p> 
            <VehicleEquipment />
            <VehicleType />
            <SearchBtn/>
        </div>
    );
}