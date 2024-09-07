import css from "./CamperPage.module.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCamperById } from "../../redux/campers/operations";
import { Toaster } from "react-hot-toast";
import { CamperDetails } from "../../components/CamperDetails/CamperDetails";
 

export const CamperPage = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getCamperById);
    },[dispatch,id])

    return <>
        <Toaster position="top-center" reverseOrder={false} />
        <CamperDetails/>
    </>
} 