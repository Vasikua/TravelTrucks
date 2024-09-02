import { css } from "./CamperFeatures.module.css";
import { BookForm } from "../BookForm/BookForm";

export const CamperFeatures = () => {
    return <div className={css.wrapper}>
        <div className={css.features}>
            <div className={css.characteristic}>
                
          </div>
            <div className={css.vehicleDetails}>
            </div>  
        </div>
        <BookForm/>
    </div>
}