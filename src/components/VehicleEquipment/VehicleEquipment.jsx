import css from "./VehicleEquipment.module.css";
import icons from '../../images/sprite.svg';

export const VehicleEquipment = ({camper})=> {
    const equipments = [
        {
            key: "microwave",
            label: "Microwave",
            svg: "wave"
        },
        {
            key: "refrigerator",
            label: "Frige",
            svg: "frige"
        },
        {
            key: "transmission",
            label: "Automatic",
            svg: "diagram",
            value: "automatic"
        },
        {
            key: "radio",
            label: "Radio",
            svg: "radio"
        },
        {
            key: "AC",
            label: "AC",
            svg: "ac"
        },
        {
            key: "bathroom",
            label: "Bathroom",
            svg: "water"
        },
        {
            key: "TV",
            label: "TV",
            svg: "tv"
        },
        {
            key: "gas",
            label: "Gas",
            svg: "fuel-pump"
        },
        {
            key: "kitchen",
            label: "Kitchen",
            svg: "cup-hot"
        },
        {
            key: "engine",
            label: "Hybrid",
            svg: "engine",
            value: "hybrid"
        },
        {
            key: "engine",
            label: "Diesel",
            svg: "engine",
            value: "diesel"
        },
        {
            key: "engine",
            label: "Petrol",
            svg: "engine",
            value: "petrol"
        },
  ];

    return <>
        <div className={css.wrapper}>
        <h4> Vehicle equipment</h4>
            {equipments.map(equipment => {
                const equipmentIncluded = camper[equipment.key] === true || camper[equipment.key] === equipment.value;
                return equipmentIncluded ?
                    (<div className={css.equipment} key={equipment.key}>
            <svg className={css.icon} width="20" height="20">
              <use href={`${icons}#${equipment.svg}`} />
            </svg>
            <span>{camper.label}</span>
          </div>
        ) : null;
        })
        }    
        </div>
    </>
}
