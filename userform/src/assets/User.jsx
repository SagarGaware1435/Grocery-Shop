import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function User() {
    const initialValues={
        name:"",
        email:"",
        phone:""
    }
    const onSubmit=(values)=>{
        console.log(values);
    }
    const validationSchema=Yup.object({
        name:Yup.string().required("Please enter your name").min(4).max(8),
        email:Yup.string().required("Please enter your email"),
        phone:Yup.string().required("Please enter your Phone Number")

    })
    const Formik=useFormik({initialValues,onSubmit,validationSchema})
  return (
    <div>
        <h4>User Form</h4>
         <form onSubmit={formik.handleSubmit}>
            <input type='text' placeholder='Enter Name' name='name' value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.name&&formik.errors.name?<span style={{color:"red"}}>{formik.errors.name}</span>:null}<br/><br/>
            <input type='email' placeholder='Enter Email' name='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.email&&formik.errors.email?<span style={{color:"red"}}>{formik.errors.email}</span>:null}<br/><br/>
            <input type='text' placeholder='Enter Phone number' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            {formik.touched.phone&&formik.errors.phone?<span style={{color:"red"}}>{formik.errors.phone}</span>:null}<br/><br/>
            <input type='submit' value="Submit"/>
        </form>
      
    </div>
  )
}

export default User
