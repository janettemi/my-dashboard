import React from 'react';
import classes from './Login.module.css';
import {  Link} from 'react-router-dom';
import { useState } from 'react';
import { Formik, Form , Field} from 'formik';
import { useNavigate } from 'react-router';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import Authcontext from '../../context/AuthProvider';

function Login() {
  const { login } = useContext(Authcontext);
  const navigate = useNavigate()
  const initialValue = {data: { username:'', password:''}}
  const [errorMessage , setErrorMessage] = useState(null);

    const handleSubmit = async (values) => {
      try {
        const response = await fetch('https://lab-ecom-api-4c56x6bkca-uc.a.run.app/api/v1/admin/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values),
        });
        // if (!response.ok) {
        //   setErrorMessage('Invalid username or password');
        //   return;
        // }
        response.json().then((res) => {
          const status = res.success.status;
          const token = res.content.data.token; 
          
          if(status !== 200){
            console.log(status);
            setErrorMessage('An error occurred while logging in');
            return;
          }
          
          setTimeout(()=> {
             setErrorMessage("Logging in successful...");
             navigate('/')
             console.log('navigating')
          }, 2000);
          
          
          console.log("Response: ", res); 
          console.log("status", status);
          console.log("token", token);
          
          login('authToken', token);
          
        });

        
        // console.log("Response: ", response.json());
        //gets response body and gets token, checks for whether request was successful or not. 
        // const data = response.json();
        // const token = data.content.data.token;
        // console.log("Data", data);
        // const status = data.success.status;
        
        
        // console.log(token);
        
      } catch (error) {
        // console.log("Data:?", data);
        // console.log("Data real: ", response);
        console.log('The false catch', error);
        setErrorMessage('Connect to network');
       } 
      //finally {                           
      //   setSubmitting(false);
      // }
    };

  return (
    <>
    <div className={classes.fullpage}>
    <div className={classes.tops}>
                <div className={classes.chartss}>
                    <ShoppingCartOutlinedIcon className={classes.charts} />
                 </div>
                <div className={classes.basess}>
                <h2>EasyShop</h2>
                <p>Marketplace Storefront</p>
                </div>
    </div>
    <div className={classes.page}><p>Sign in to continue</p></div>
    <div className={classes.signin}>
      <div>
    {errorMessage && <p className={classes.Error}>{errorMessage}</p>}
    <Formik initialValues={initialValue} onSubmit={handleSubmit}>
    <div className={classes.form}>
    <Form>
      <div className={classes.pages}>
      <div>
        <label htmlFor='username'>Username:</label>
        <Field  className={classes.field}
        id='username'
        type='text' 
        name='data.username'
         />
      </div>
      <div>
        <label htmlFor='password'>Password:</label>
        <Field  className={classes.field}
        id='password'
        type='password'
        name='data.password'
        />
      </div>
      <a href='?'>Forgot password?</a>
      <div className={classes.loginside}>
        <p className={classes.loginin}>New user? <Link to='/Signup'>Create a new account</Link></p>
        <button className={classes.signin} type='sumbit'>Sign in</button>
        </div>
        </div>
    </Form>
    </div>
    </Formik>
    </div>
    </div>
    </div>
 </>
  )
  };

export default Login;