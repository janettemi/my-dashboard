import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Signup.module.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {useFormik} from 'formik'; 
import * as Yup from 'yup';
import { useState } from 'react';
function Signup() {
  const [errorMessage, setErrorMessage] = useState(false);
    const formik = useFormik({
      initialValues:{
        data:{
          name: '',
          userName:'',
          email:'',
          password:'',
        }
      },
      validationSchema: Yup.object({
        userame: Yup.string() 
        .max(20, 'Must be 20 characters or less')
         .required('Required'),
       email: Yup.string()
       .email('require email address')
       .required('Required'),
       password: Yup.string()
       .min( 7,'Password minimum 7 charaters')
       .required('Require'),
      }),
     onSubmit: async (values) => {
      const response = await fetch('https://lab-ecom-api-4c56x6bkca-uc.a.run.app/api/v1', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        if(!response.okay){
          setErrorMessage('An error occurred while Signing in')
          return;
        }
     }
    });

  const handleSubmit = (e) => {
    e.preventDefault();

    formik.submitForm();
  }
   console.log(formik.errors, formik.values)
  return (
  <>
    <div className={classes.signup}>
    <div  className={classes.signup1}>
    <div> <h1>Signup Form</h1></div>
    <form className={classes.form1} onSubmit={handleSubmit}>
      <div>
  <p>{errorMessage}</p>
      <div>
      <label> Name:</label>
      <input type='text'
                id='Name'
                {...formik.getFieldProps('Name')}
      >
      </input>
      </div>
      {formik.touched.Name && formik.errors.Name ? (
         <div  className={classes.errors}>{formik.errors.Name}</div>
       ) : null}
      <div>
      <label>Username:</label>
      <input type='text'
              id='userName'
               name='userName'
              {...formik.getFieldProps('userName')}
      >
      </input>
      </div>
      {formik.touched.userName && formik.errors.userName ? (
         <div  className={classes.errors}>{formik.errors.userName}</div>
       ) : null}
      <div>
      <label>Email:</label>
      <input type='email'
              id='email'
              {...formik.getFieldProps('email')}
      >
      </input>
      </div>
      {formik.touched.email && formik.errors.email ? (
         <div  className={classes.errors}>{formik.errors.email}</div>
       ) : null}
      <div>
      <label>Password:</label>
      <input type='password'
               id='password'
              {...formik.getFieldProps('password')}
      >
      </input>
      </div>
      {formik.touched.password && formik.errors.password ? (
         <div  className={classes.errors}>{formik.errors.password}</div>
       ) : null}

      <button type='submit' className={classes.signupbtns}>CREATE ACCOUNT</button>
      </div>
    </form>
    <div>
      <p>Have an account already <Link to='/Login'>Login</Link></p>
    </div>
    </div>
    </div>
      <div className={classes.tops}>
                <div className={classes.chartss}>
                    <ShoppingCartOutlinedIcon className={classes.charts} />
                 </div>
                <div className={classes.basess}>
                <h2>EasyShop</h2>
                <p>Marketplace Storefront</p>
                </div>
    </div>
    </>
  )
}

export default Signup;