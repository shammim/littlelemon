
// import React,{ useState } from "react";


// export default function LogIn (props){
//     const [firstname, setFirstname] =useState('');
//     const [lastname, setLastname] =useState('');
//     const [email, setEmail] =useState('');
//     const [phone, setPhone] =useState('');
//     const [date, setDate] =useState('');
//     const [request, setRequest] = useState('');
//     const [cancellation, setCancellation]= useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.SubmitForm(e);
//     }
//     const handleChange =(e) => {
//         setDate(e);
//         props.dispatch(e);
//     }
//     return(

//         <>
//          <form class="LogIn">
//              <article>
//                     <div>
//                         <label for ="user_firstname">First name</label>
//                         <input type="firstname" id="firstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Enter Firstname" />
//                   </div>
//                   <div>
//                      <label for ="user_lastname">Last name</label>
//                      <input type="lastname" id="lastName" name="user_lastname" required value={lastname} onChange={(e) => setLastname(e.target.value)}placeholder="Enter Lastname"/>
//                  </div>
//                   <div>
//                         <label for="user_email">Email ID</label>
//                         <input type="email" id="user_email" name="user_email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="someone@example.com"/>
//                   </div>
//                     <div>
//                         <label for="user_phonenumber">Phone number</label>
//                         <input type="tel" id="userPhonenumber" name="userPhonenumber" placeholder="+ " required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
//                  </div>
//                  <div>
//                        <label for="cancellation"> Please agree to cancellation policy</label>
//                        <input type="checkbox" id="cancellation" name="cancellation" value={cancellation}  onChange={(e)=>setCancellation(e.target.value)}/>
//                   </div>
//                   <div>
//                      <button type="submit" onClick={handleSubmit}>Confirm Reservation</button>
//                    </div>
//              </article>
//          </form>
//        </>
//     );

// };
import {useFormik } from "formik";
import { basicSchema } from "../schemas";
const onSubmit= async(values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve)=> setTimeout(resolve, 1000));
    actions.resetForm();

};

const LogIn =()=> {
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
            phone:"+91-"
        },
        validationSchema: basicSchema,
        onSubmit,
    });
    console.log(errors);

    return(
       <>
         < form onSubmit={handleSubmit} autoComplete="off">
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
               <label htmlFor="phone"> Phone</label>
               <input
                   value={values.phone}
                   onChange={handleChange}
                   id="phone"
                   type="phonenumber"
                   onBlur={handleBlur}
                />
                <br/>
                <br/>
              <button disabled={isSubmitting} type="submit">Reserve a table</button>
         </form>
       </>
    )
}
export default LogIn