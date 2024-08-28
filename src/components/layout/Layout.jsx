import css from "./Layout.module.css";
import AppBar from "../appBar/AppBar"
import { Toaster } from "react-hot-toast";

export const Layout = ({ children })=> {
    return (
        <div className={css.container}>
            <AppBar />
            {children}
            <Toaster position='top-center' reverseOrder={false} />
        </div>
    );
}