import css from "./VahicleType.module.css";
export default function VahicleType() {

    return <>
     <h4> Vahicle type</h4>
        
        <ul className={css.type}>
            <li className={css.typeItem}>Van</li>
            <li className={css.typeItem}>Fully integrated</li>
            <li className={css.typeItem}>Alcove</li>
            
        </ul>
        
    </>
}