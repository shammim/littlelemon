
import React,{ useState } from "react";


export default function LogIn (props){
    const [firstname, setFirstname] =useState('');
    const [lastname, setLastname] =useState('');
    const [email, setEmail] =useState('');
    const [phone, setPhone] =useState('');
    const [date, setDate] =useState('');
    const [request, setRequest] = useState('');
    const [cancellation, setCancellation]= useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e);
    }
    const handleChange =(e) => {
        setDate(e);
        props.dispatch(e);
    }
    return(

        <>
         <form class="LogIn">
             <article>
                    <div>
                        <label for ="user_firstname">First name</label>
                        <input type="firstname" id="firstName" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Enter Firstname" />
                  </div>
                  <div>
                     <label for ="user_lastname">Last name</label>
                     <input type="lastname" id="lastName" name="user_lastname" required value={lastname} onChange={(e) => setLastname(e.target.value)}placeholder="Enter Lastname"/>
                 </div>
                  <div>
                        <label for="user_email">Email ID</label>
                        <input type="email" id="user_email" name="user_email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="someone@example.com"/>
                  </div>
                    <div>
                        <label for="user_phonenumber">Phone number</label>
                        <input type="tel" id="userPhonenumber" name="userPhonenumber" placeholder="+ " required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                 </div>
                 <div>
                      <label for="booking_date">Booking Date</label>
                      <input type="date" id="bookingDate" value={date} onChange={(e)=> handleChange(e.target.value)}aria-required="true"/>
                </div>
                 <div>
                      <label for="dinners">Dinners</label>
                      <input type="dinners" id="dinners" name="dinners" min="1" max="15" placeholder="1-15"/>
                 </div>
                 <div>
                      <label for="special_request">Mention if any special request</label>
                      <input type="text" id="special_request" name="special_request" value={request}maxlength="65" onChange={(e)=>setRequest(e.target.value)} placeholder="please mention any special request"/>
                 </div>
                 <div>
                       <label for="cancellation"> Please agree to cancellation policy</label>
                       <input type="checkbox" id="cancellation" name="cancellation" value={cancellation}  onChange={(e)=>setCancellation(e.target.value)}/>
                  </div>
                  <div>
                     <button type="submit" onClick={handleSubmit}>Confirm Reservation</button>
                   </div>
             </article>
         </form>
       </>
    );

};