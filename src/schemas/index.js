import * as Yup from 'yup';

export const basicSchema = Yup.object().shape({

    firstName: Yup.string()
    .min(2, 'Too Short!')
    .max(50,'Too Long')
    .required("Required"),
    
    lastName:Yup.string().min(2, 'Too Short!').max(50,'Too Long')
    .required("Required"),
   
    email: Yup.string().email("Invalid Email")
    .required("Required"),
    occasionType: Yup.string()
    .oneOf(["Birthday","Engagement","Get-Together","Anniversary", "Meeting"])
    .required("Required"),
})