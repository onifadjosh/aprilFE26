
import axios from 'axios';
import { useFormik } from 'formik'
import { jwtDecode } from 'jwt-decode';
import React, { useState } from 'react'
import Cookies from 'universal-cookie';
import  * as yup from "yup"

const Formikk = () => {
  const cookies = new Cookies()
  const [image, setimage] = useState(null)

  const handleImage=(e)=>{
      console.log(e.target.files[0]);
      let file = e.target.files[0]
      setimage(e.target.files[0])

      let reader= new FileReader()
      reader.onloadend=()=>{
        setimage(reader.result)
        console.log(reader.result);
        
      }

      reader.readAsDataURL(file)
      
  }
   const formik= useFormik({
    initialValues:{
        firstName:"",
        lastName:"",
        email:"",
        password:""
    },

    validationSchema:yup.object(
      {
        firstName:yup.string().required("first name is required"),
        lastName:yup.string().required('last name is required'),
        email:yup.string().required("email is required").email("email is invalid"),
        password:yup.string().required("password is required").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, "password is too weak")
  
      }
    ),

    onSubmit:async()=>{
      console.log(formik.values);
      
      try {
        let response = await axios.post(`${import.meta.env.VITE_DEV_BASE_URL}/api/v1/register`, {...formik.values, profileImage:image})

        if(response.status==201){
          alert("user registered successfully")
          console.log(response.data);

          let time = jwtDecode(response.data.data.token)

          cookies.set("token", response.data.data.token, {
            expires:new Date(time.exp*1000)
          })
          
        }
        
      } catch (error) {
        console.log(error.response);
        alert(error.response.data.message)
        
      }
      
    }
   })

  //  console.log(formik.values);
  // console.log(formik.errors);
  console.log(formik.touched);
  //  if(condition){
        // statement
  //  }
  //  if(){

  //  }else{

  //  }
   
  return (
    <div>
      <img src={image} alt="" width={200} height={200} />
        <input type="file"  onChange={(e)=>handleImage(e)}/><br /><br />
        {/* <p>firstName</p> */}
        <input type="text" placeholder='first name'  name='firstName' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
        {formik.touched.firstName&&formik.errors.firstName?<small className='text-danger'>{formik.errors.firstName}</small>:""} <br />


        {/* <p>last name</p> */}
        <input type="text" placeholder='last name' name='lastName' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
        {(formik.touched.lastName&&formik.errors.lastName )&& <small className='text-danger'>{formik.errors.lastName}</small>}<br />

        {/* <p>email</p> */}
        <input type="text" placeholder='email' name='email' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
        <small className='text-danger'>{formik.errors.email}</small><br />

        {/* <p>password</p> */}
        <input type="password" placeholder='password'  name='password' onChange={formik.handleChange} onBlur={formik.handleBlur}/><br />
        <small className='text-danger'>{formik.errors.password}</small><br />


        <button type='submit' onClick={formik.handleSubmit}>{formik.isSubmitting?"submitting...":"submit"}</button>
    </div>
  )
}

export default Formikk