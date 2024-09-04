import { createSelector } from "@reduxjs/toolkit";
import { selectCampers } from "../campers/selectors";


export const selectFilters =         state => state.filters;
export const selectLocationFilter =   state => state.filters.location ||"";
export const selectEquipmentFilter =  state => state.filters.equipment ||[];
export const selectTypeFilter =       state => state.filters.type || "";

export const selectFilteredCampers = createSelector(
    [selectCampers, selectLocationFilter, selectEquipmentFilter, selectTypeFilter],
    (campers, locationFilter, equipmentFilter, typeFilter) => {
        return campers.filter(camper => {
            const type = typeFilter ? camper.type === typeFilter : true;
            const location = camper.location.toUpperCase().includes(locationFilter.toUpperCase());
            const equipment = equipmentFilter.every(equipment => {
                if (equipment === "automatic") {
                 return camper["transmission"]==="automatic"
             }   
                return camper[equipment] === true;
            });
            return location && equipment && type;
         })
    }
)