import css from "./CatalogPage.module.css";
import { Filters } from "../../components/Filters/Filters";
import { CatalogList } from "../../components/CatalogList/CatalogList";
export default function CatalogPage() {
    
    return (<div className={css.wrapper}>
         
        <h2 className={css.title}>Catalog Page </h2>
       
            
            <Filters />
            <CatalogList />
        </div>
    )

}