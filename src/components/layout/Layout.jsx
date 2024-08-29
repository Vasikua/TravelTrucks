import css from "./Layout.module.css";
import { Toaster } from "react-hot-toast";

export const Layout = ({ children })=> {
    return (
        <div className={css.container}>
             {children}
            <Toaster position='center' reverseOrder={false} />
        </div>
    );
}