// import { createSelector } from "@reduxjs/toolkit";
// import { selectNameFilter } from "../filter/selectors";
export const selectCampers =     state => state.campers.items;
export const selectIsLoading =    state => state.campers.isLoading;
export const selectError =        state => state.campers.error;
export const selectStatusFilter = state => state.filters.status;
export const selectorSearch =     state => state.filters.name;

// export const selectFilteredCampers = createSelector(
//     [selectCampers, selectNameFilter],
//     (campers, nameFilters) => {
//         return campers.filter(contactName =>
//             contactName.name.toLowerCase().includes(nameFilters.toLowerCase())
//         );
// }
// )
