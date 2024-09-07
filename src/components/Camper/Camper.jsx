import css from "./Camper.module.css";
import icons from '../../images/sprite.svg';
import  {VehicleEquipment}  from '../VehicleEquipment/VehicleEquipment';
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite } from '../../redux/favorite/selectors';
import { switchFavorite } from '../../redux/favorite/slice';
import { ShowMoreBtn } from '../Button/ShowMoreBtn/ShowMoreBtn';


export const Camper = ({ camper }) => {
      
    const titleImage = camper.gallery[0].thumb || '';
    const textLength = camper.description.length>62? camper.description.slice(0,62)+"..." : camper.description;
    const priceCar = camper.price.toFixed(2);
    const dispatch = useDispatch();
    const favorite = useSelector(selectFavorite);
    const ifFavorite = Array.isArray(favorite) && favorite.includes(camper.id);

    const handleFavorite = () => {
        dispatch(switchFavorite(camper.id))
    }
    return <>
       
        <div className={css.camperComtainer}>
            <div className={css.camperPoster}>
                {titleImage ? <img className={css.poster} src={titleImage} alt={`${camper.name} camper`} /> : 'No image available'}
            </div>
            <div className={css.camperDescription}>
                <div>
                    <div className={css.name}>
                        {camper.name}
                    </div>
                    <div className={css.price}>
                        {priceCar}
                    </div>
                    <div className={css.favorite}>
                        <svg width="26"
                            height="24"
                            onClick={handleFavorite}
                            fill={ifFavorite ? "#e44848" : "#101828"}>
                            <use href={`${icons}#heard`} />
                        </svg>
                    </div>
                </div>
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
                        {location}
                    </div>
                 </div>
                <div>
                  {textLength}
                </div>
                <VehicleEquipment camper={camper} />
                <ShowMoreBtn data={camper.id} />
            </div>
            
        </div>
    </>
}


// AC,TV,bathroom,consumption,description,engine, , gas, height, id, kitchen, length, location, microwave,
//     name, price, radio, rating, refrigerator, reviews,
//     tank, transmission, water, width