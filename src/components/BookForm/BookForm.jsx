import css from './ContactForm.module.css';
import * as Yup from "yup";
import { ErrorMessage,Field,Form, Formik } from "formik";
import { useDispatch } from 'react-redux';
import { useId } from 'react';
// import { addBooking } from '../../redux/booking/operations'; must be created

 
    const bookingSchema =Yup.object().shape({
        name: Yup.string().min(3, "must be at least 3 chars").required("Is required"),
        email: Yup.email().required("Is required"),
        date:Yup.date().required('Is required')
    });

export default function BookingForm() {
    const dispatch = useDispatch();
    const nameId = useId();
    const emailId = useId();  
    const dateId = useId(); 
    const commentId = useId();
    
    const addBooking = (values, actions) => {
          dispatch(addBooking(values))
          actions.resetForm();
        }
    
    return (
        <Formik initialValues={{
            name: "",
            email: "",
            bookingDate:"",
            comment: "",
        }}
            validationSchema={bookingSchema}
            onSubmit={addBooking}>
            <Form className={css.form}>
                <div className={css.group}>
                    <label htmlFor={nameId}>Name*</label>
                    <Field type="text" name="name" id={nameId} />
                    <ErrorMessage name="name" component={"span"}/>
                </div>
                <div className={css.group}>
                    <label htmlFor={emailId} >Email*</label>
                    <Field type="email" name="email" id={emailId} />
                    <ErrorMessage name="email" component={"span"}/>
                </div>
                <div className={css.group}>
                    <label htmlFor={dateId} >Booking date*</label>
                    <Field type="text" name="booking date" id={dateId} />
                    <ErrorMessage name="booking date" component={"span"} />
                </div>
                 <div className={css.group}>
                    <label htmlFor={commentId} >Comment</label>
                    <Field as="textarea" name="comment" id={commentId} rows="5" cols="20"/>
                    
                </div>
                <button className={css.submit} type='submit'>send</button>
        </Form>
        </Formik>
    );
};

