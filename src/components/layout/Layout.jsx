import css from "./Layout.module.css";
import { Toaster } from "react-hot-toast";
import { Navigation } from "../navigation/Navigation";
export const Layout = ({ children })=> {
    return (
        <div className={css.container}>
            <header className={css.mainNav}>
            <Navigation/>
             {children}
            <Toaster position='center' reverseOrder={false} />
            </header>        
        </div>
    );
}