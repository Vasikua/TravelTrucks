import css from "./CatalogPage.module.css";
import { Filters } from "../../components/Filters/Filters";
import { CatalogList } from "../../components/CatalogList/CatalogList";


export default function CatalogPage() {
  
    return (<div className={css.wrapper}>
            <div className={css.container}>
             <Filters />
            <CatalogList />
        </div>
    </div>)

}