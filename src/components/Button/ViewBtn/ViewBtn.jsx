import css from "./ViewBtn.module.css";

import { Link } from "react-router-dom"; 
export const ViewBtn = () => {

        return <>
        <button className={css.viewBtn}
       
        >
            <span className={css.text}>
                    <Link to='/catalog'>
                        View Now
                    </Link>
            </span>
        </button>
</>   
}