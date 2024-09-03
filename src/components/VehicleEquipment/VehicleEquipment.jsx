import css from "./VehicleEquipment.module.css";


export default function VehicleEquipment() {


    return <>
        <h4> Vehicle equipment</h4>
        
        <ul className={css.equipment}>
            <li className={css.equipmentItem}>AC</li>
            <li className={css.equipmentItem}>Automatic</li>
            <li className={css.equipmentItem}>Kitchen</li>
            <li className={css.equipmentItem}>TV</li>
            <li className={css.equipmentItem}>Bathroom</li>
        </ul>
        
    </>
}
