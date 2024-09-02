import css from './HomePage.module.css'
import { ViewBtn } from "../../components/Button/ViewBtn/ViewBtn";
export default function HomePage() {
    return <>
        <div className={css.mainContainer}>
            <div className={css.textContainer}>
                <p className={css.title}>Campers of your dreams</p>
                <p className={css.text}>You can find everything you want in our catalog</p>
            </div> 
            <div className={css.btnContainer}>
                <ViewBtn />
            </div>              
        </div>
    </>
}