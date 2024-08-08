import { useFormik } from 'formik'
import React from 'react'

function Formvalid() {
  const initialValues={
    name:"",
    email:"",
    phone:""
  }
  const onSubmit=(values)=>{
    console.log(formik.values)
  }
  const validate=values=>{
    let errors={}
    if(!values.name)
    {
      errors.name="Please enter name"
    }
    else if(values.name.length<4 || values.name.length>8)
    {
      errors.name="Name must contain 4 to 8 characetrs"
    }
    if(!values.email)
    {
      errors.email="Please enter email"
    }
    if(!values.phone)
    {
      errors.phone="Please enter phone"
    }
    // else
    // {
    //   alert("Login successful")
    // }
    return errors
  }
  const formik=useFormik({initialValues,onSubmit,validate})
  return (
    <div>
        <h1>Form validation using Formik Libraray</h1>
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

export default Formvalid