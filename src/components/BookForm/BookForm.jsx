import css from "./BookForm.module.css";
import * as Yup from "yup";
import { toast } from "react-hot-toast";
import { ErrorMessage,Field,Form, Formik } from "formik";
import { useId } from 'react';

 
const bookingSchema =Yup.object().shape({
        name: Yup.string().min(3, "must be at least 3 chars").required("Is required"),
        email: Yup.string().email().required("Is required"),
       bookingDate:Yup.date().required('Is required')
    });

export default function BookingForm() {
    
    const nameId = useId();
    const emailId = useId();  
    const dateId = useId(); 
    const commentId = useId();
    
    const addBooking = (values, actions) => {
        actions.resetForm();
        toast.success('Нou have booked a camper', {
  style: {
    border: '1px solid #713200',
    padding: '16px',
    color: '#713200',
  },
  iconTheme: {
    primary: '#713200',
    secondary: '#FFFAEE',
  },
      });
        }
    
    return (<div className={css.wrapper}>
        <div className={css.bookingFormTitle}>
            <p className={css.title}>
                Book your campervan now
            </p>
            <p className={css.text}>
               Stay connected! We are always ready to help you. 
            </p>
        </div>
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
                    <label htmlFor={nameId}>
                       
                    </label>
                    <Field className={css.field} type="text" name="name" id={nameId}  placeholder="Name*"/>
                    <ErrorMessage name="name" component={"span"}/>
                </div>
                <div className={css.group}>
                    <label htmlFor={emailId} >
                        
                    </label>
                    <Field className={css.field} type="email" name="email" id={emailId}  placeholder="Email*"/>
                    <ErrorMessage name="email" component={"span"}/>
                </div>
                <div className={css.group}>
                    <label htmlFor={dateId} >
                        
                    </label>
                    <Field className={css.field} type="date" name="bookingDate" id={dateId}  placeholder="Booking date*"/>
                    <ErrorMessage name="bookingDate" component={"span"} />
                </div>
                 <div className={css.group}>
                    <label htmlFor={commentId} >
                       
                    </label>
                    <Field className={css.fieldComment} as="textarea" name="comment" id={commentId} rows="5" cols="20" placeholder="Comment"/>
                    
                </div>
                <button className={css.submit} type='submit'>
                    <span className={css.submitText}>
                        Send
                    </span>
                </button>
        </Form>
        </Formik>
    </div>);
};

