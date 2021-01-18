import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup'; 


const registerFormSchema = Yup.object({
    email: Yup.string()
    .required()
    .email(),

    userName: Yup.string()
    .required()
    .min(3, "userName must be 6 characters at minimum"),

    phoneNumber: Yup.string()
    .required("phoneNumber is required")
    .min(4),

    password: Yup.string()
    .required('password is required !')
    .min(6, "Password must be 6 characters at minimum")
})


const  RegisterForm = () => { 
  
    const formik = useFormik({
        initialValues: {
            email: "",
            userName: "",
            phoneNumber: "",
            password: ""
        },
        validationSchema: registerFormSchema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            }
    }); 

    // console.log('Formik Errors: ', formik.errors);

        return(
             
                <div className="col-lg-4 col-md-6 ml-auto mr-auto">
                  <div className="card card-login">
                    <form className="form" onSubmit={formik.handleSubmit}>
                      <div className="card-header card-header-primary text-center">
                        <h4 className="card-title">Register</h4>
                      </div> 
                      <div className="card-body">
                      <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">mail</i>
                            </span>
                          </div>
                          <input 
                          {...formik.getFieldProps('email')}
                          type="email" 
                          name="email" 
                          className="form-control" 
                          placeholder="Email..." />
                        </div>

                        {formik.touched.email && formik.errors.email ? ( <b className="text-danger">{formik.errors.email}</b>
                        ) : null}

                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">face</i>
                            </span>
                          </div>
                          <input 
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.userName}
                          type="text" 
                          name="userName" 
                          className="form-control" 
                          placeholder="UserName..." />
                        </div>

                        {formik.touched.userName && formik.errors.userName ? ( <b className="text-danger">{formik.errors.userName}</b>
                        ) : null}

                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">phone</i>
                            </span>
                          </div>
                          <input 
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.phoneNumber}
                          type="number" 
                          name="phoneNumber" 
                          className="form-control" 
                          placeholder="PhoneNumber..." />
                        </div>

                        {formik.touched.phoneNumber && formik.errors.phoneNumber ? ( <b className="text-danger">{formik.errors.phoneNumber}</b>
                        ) : null}

                        <div className="input-group">
                          <div className="input-group-prepend">
                            <span className="input-group-text">
                              <i className="material-icons">lock_outline</i>
                            </span>
                          </div>
                          <input 
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.password}
                          type="password" 
                          name="password" 
                          className="form-control" 
                          placeholder="Password..." />
                        </div>

                        {formik.touched.password && formik.errors.password ? ( <b className="text-danger">{formik.errors.password}</b>
                        ) : null}

                      </div>
                      <div className="footer text-center">
                        <button type="submit" disabled={!(formik.dirty && formik.isValid)} className="btn btn-primary btn-link btn-wd btn-lg">register</button> 
                      </div>   
                       
                    </form>
                  </div>
                </div>
      
            
        ) 

}

export default RegisterForm;