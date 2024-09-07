import  css  from "./ShowMoreBtn.module.css";
import { Link } from "react-router-dom";
export const ShowMoreBtn = ({id}) => {
    return <>
        <button className={css.ShowMoreBtn} type="button" >
            <span className={css.text}>
              <Link to={`/catalog/${id}`}>  
                Show more
               </Link>
            </span>
     </button>
</>   
}