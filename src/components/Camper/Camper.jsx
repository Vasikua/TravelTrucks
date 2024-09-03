import css from "./Camper.module.css";

export const Camper = ({ camper: { name, gallery, description, price, rating, location} }) => {
      
    const titleImage = gallery?.[0]?.original || '';
    const textLength = description.length>62? description.slice(0,62)+"..." :description;
    const priceCar = price.toFixed(2);
    return <>
       
        <div className={css.camperComtainer}>
            <div className={css.camperPoster}>
                {titleImage ? <img className={css.poster} src={titleImage} alt={`${name} camper`} /> : 'No image available'}
            </div>
            <div className={css.camperDescription}>
                <div>
                    <div>{name}</div>
                    <div> {priceCar}</div>
                </div>
                 <div>
                    <div>
                        {rating}
                    </div>
                    <div>
                        {location}
                    </div>
                 </div>
                <div>
                  {textLength}
                </div>
                <ul>

                </ul>
            </div>
        </div>
    </>
}


// AC,TV,bathroom,consumption,description,engine, , gas, height, id, kitchen, length, location, microwave,
//     name, price, radio, rating, refrigerator, reviews,
//     tank, transmission, water, width