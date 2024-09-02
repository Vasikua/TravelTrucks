import css from "./ViewBtn.module.css";
import { useNavigate } from "react-router-dom";
export const ViewBtn = () => {

    const navigate = useNavigate();
    const goToCatalog = () => {
        navigate('/catalog');
    }
    return <>
        <button className={css.viewBtn}
        onClick={goToCatalog}
        >
            <span className={css.text}>
                View Now
            </span>
     </button>
</>   
}