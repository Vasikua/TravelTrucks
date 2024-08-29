import css from './NotFoundPage.module.css';

export default function NotFoundPage() {
    return (<>
        <div className={css.wrapper}>
            <p className={css.text}> Error 404 Page not found
                <img src="../../images/not_found_min.png" alt="content not found" />
            </p>
        </div>
    </>)
}