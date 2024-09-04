import  css  from "./LoadMoreBtn.module.css";
export const LoadMoreBtn = () => {

    return <>
        <button className={css.LoadMoreBtn} type="button" >
            <span className={css.text}>
                Load More
            </span>
     </button>
</>   
}