import css from "./Camper.module.css";

export const Camper = ({ camper: { name, gallery} }) => {
     const titleImage = gallery?.[0]?.original || '';
    return <>
        <div className={css.camperComtainer}>
            <div className={css.camperPoster}>

 {titleImage ? <img src={titleImage} alt={`${name} camper`} /> : 'No image available'}
            </div>
            <div className={css.camperDescription}>
{name}
            </div>
        </div>
    </>
}


// AC,TV,bathroom,consumption,description,engine, , gas, height, id, kitchen, length, location, microwave,
//     name, price, radio, rating, refrigerator, reviews,
//     tank, transmission, water, width