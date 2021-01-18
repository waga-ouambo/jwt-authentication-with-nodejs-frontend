/* eslint-disable */
import React, {Component} from 'react';
import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup'; 
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


// const loginFormSchema = Yup.object().shape({
//     email: Yup.string()
//     .required("Email is not in the expected email address")
//     .email('Invalid format email'),

//     password: Yup.string()
//     .required('password is required !')
//     .min(6, "Password must be 6 characters at minimum")
// }) 

class LoginForm extends Component {

  state={
            ipAdress: "",
            error: false,
            loading: false, 
            posts:[], 
        }
 
    //  formik = () => useFormik({
    //     initialValies: {
    //     email: '',
    //     password:''
    //      }
    // });

    componentDidMount(){
      toast.info('Welcome, please sign in !')
        console.log(this.props);
        
    }

    loginFormSchema = () => Yup.object().shape({
        email: Yup.string()
        .required()
        .email(),
    
        password: Yup.string()
        .required('password is required !')
        .min(4, "Password must be 4 characters at minimum")
    }) 


    initialValues() {
        return {
          email: '',
          password: '' 
        }
      }

     

    render(){ 
        console.log(Formik.errors);
        return(
            
            <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                <div className="card card-login">
                <Formik
                initialValues={this.initialValues()}
                validationSchema={this.loginFormSchema}
                onSubmit={async (values, actions) => {
                    // await new Promise((r) => setTimeout(r, 500));
                    // alert(JSON.stringify(values, null, 2));
                    // console.log(values);
                    console.log(actions);

                    try {
                     const res = await axios.post('http://localhost:3000/api/user/login', values);
                     if(res.status !== 200 && res.status !== 201) {
                      console.log('FAKE'); 
                       throw new Error (res.data);
                     }
                      console.log(res); 
                      toast.success('Successful Login');
                    } catch (error) {
                      // this.setState({errorMessage: error.message});
                      // actions.setFieldError('errorMessage', error.message);
                      toast.error(error.message);
                      console.log(error.message);
                    }finally {
                      actions.setSubmitting(false);
                  } 

                  }}
            >
                  {({ errors, touched, validateField, validateForm, dirty, isValid  }) =>  
                
                  ( <Form className="form"  style={{minHeight: 'auto'}} >
                      <div className="card-header card-header-primary text-center">
                        <h4 className="card-title">Login</h4> 
                        <h1 style={{color: 'red', textAlign: 'center'}}> {errors.errorMessage}</h1> 
                        {console.log('Formik Errors: ', errors.errorMessage)} 
                        {console.log('Email Errors: ', errors.email)} 
                      </div> 
                      <div className="card-body">  
                       
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">mail</i>
                            </span>
                          </div> 
                          <Field type="email" name="email" className="form-control" placeholder="Email..." /> 
                        </div>
                        
                        {errors.email && touched.email ? (
                            <b className="text-danger">{errors.email}</b>
                        ) : null}
                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">lock_outline</i>
                            </span>
                          </div> 
                          <Field type="password" name="password" className="form-control" placeholder="Password..." />
                        </div>
                        {errors.password && touched.password ? ( 
                            <b className="text-danger">{errors.password}</b>
                        ) : null}
                      </div>
                      <div className="footer text-center">
                        {/* <a href="#pablo" className="btn btn-primary btn-link btn-wd btn-lg">Get Started</a>  */}
                        <button type="submit" disabled={!(dirty && isValid)} className="btn btn-primary btn-link btn-wd btn-lg">Get Started</button>
                      </div>   
                  </Form> ) 
                    
                }
                </Formik>
                  </div>
                </div>
        
             
        )
    }

}

export default LoginForm;