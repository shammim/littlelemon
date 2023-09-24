
import {useFormik } from "formik";
import { basicSchema } from "../schemas";
const onSubmit= async(values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve)=> setTimeout(resolve, 1000));
    actions.resetForm();

};

const Form =()=> {
    const {
        values,
         errors,
         isSubmitting,
          handleBlur,
          handleChange,
          handleSubmit,
        } = useFormik({
        initialValues: {
            email: "",
            firstName: "",
            lastName:"",
            dinners:" 2",
            time: "17:00",
            occasion:'',
            specialRequest:'',
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    console.log(errors);

    return(
     <form onSubmit={handleSubmit} autoComplete="off">
         <label htmlFor="outdoors">Outdoor Seating</label>
            <input
               value={values.outdoors}
               onChange={handleChange}
               id="outdoors"
               type="radio"
            />
            {/* {errors.outdoors && touched.outdoors && <p className="error">{errors.outdoors} </p>} */}
            <label htmlFor="Indoors">Indoor Seating</label>
            <input
               id="Indoors"
               type="radio"
               value={values.indoors}
               onChange={handleChange}
            />
            {/* {errors.indoors && touched.indoors && <p className="error">{errors.indoors} </p>} */}
            <br/>
            <label htmlFor="Firstname">First Name</label>
            <input
                id="firstName"
                type="name"
                placeholder="First name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
                // className={errors.firstName && touched.firstName ? "input-error": ""}
            />
            <label htmlFor="Lastname">Last Name</label>
            <input
                id="lastName"
                type="name"
                placeholder="Last name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
                // className={errors.lastName && touched.lastName ? "input-error": ""}
            />
            <label htmlFor="email"> Email </label>
            <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email id"
                onBlur={handleBlur}
                // className={errors.email && touched.email ? "input-error": ""}
            />
            <br/>
            <label htmlFor="date"> Date </label>
            <input
                value={values.date}
                onChange={handleChange}
                id="date"
                type="date"
    
            />
            <label htmlFor="guests">Dinners</label>
            <input
                value={values.dinners}
                onChange={handleChange}
                id="dinners"
                type="number"
                placeholder="2"
                min={"2"}
                max={"15"}
            />
            <label htmlFor="time">Time :</label>
            <input
             value={values.time}
             onChange={handleChange}
             id="time"
             type="time" min="17:00" max="23:00" 
            />
            <br/>
            <label htmlFor="occassion">Occasion</label>
             <select
                 name="Occasion"
                  value={values.occasion}
                  onChange={handleChange}
                  onBlur={handleBlur}>
                  <option value="" label="">
                      Select a occasion
                    </option>
                    <option value="Birthday" label="Birthday">
                     Birthday
                    </option>
                    <option value="Engagement" label="Engagement">
                     Engagement
                    </option>
                    <option value="Get-Together" label="Get-Together">
                     Get-Together
                    </option>
                    <option value="Anniversary" label="Anniversary">
                     Anniversary
                    </option>
                    <option value="Meeting" label="Meeting">
                     Meeting
                    </option>
              </select>
            <label htmlFor="specialrequest">Special Request</label>
            <input
                 value={values.specialRequest}
                 onChange={handleChange}
                 id="specialrequest"
                 type="text"
                placeholder="Please mention if any.."
            />
            <br/>
            <br/>
           <button disabled={isSubmitting} type="submit">Reserve a table</button>
     </form>
    )
}
export default Form;