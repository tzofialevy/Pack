import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel, FormText } from 'react-bootstrap'
import { useNavigate } from 'react-router'
import * as Yup from 'yup'
import userService from '../../services/userService'
import { User } from '../../types/user'
import "./login.scss"

const Login = () => {
    const _navigat = useNavigate();
    useEffect(() => { }, [])
    const login = (user: User) => {
      alert("login func!");
        if (!userService.getUserByPassword(user.password)) {
          alert("ther is no user with this password!");
            _navigat("/register");
        }
        else
        alert("ther is user with this password!-goodluck");

            _navigat("/plan");
    }
    const myFormik = useFormik({
        initialValues: {} as User,
        onSubmit: login,
        validationSchema: Yup.object().shape({
            name: Yup.string().required('שדה חובה'),
            password: Yup.string().min(4).typeError("the password soposed to contain mor then 4 letters").required('שדה חובה'),
        })
    })

 {/* <Form>
        {/* <!-- Email input --> *
        <FormGroup className="form-outline mb-4">
          <FormControl type="email" id="form2Example1" className="form-control" />
          <Form.Label className="form-label" htmlFor="form2Example1">Email address</Form.Label>
        </FormGroup>
      
        {/* <!-- Password input --> *
        <FormGroup className="form-outline mb-4">
          <FormControl type="password" id="form2Example2" className="form-control" />
          <Form.Label className="form-label" htmlFor="form2Example2">Password</Form.Label>
        </FormGroup>
      
        {/* <!-- 2 column grid layout htmlFor inline styling --> *
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* <!-- Checkbox --> *
            <div className="form-check">
              <FormControl className="form-check-input" type="checkbox" value="" id="form2Example34" checked />
              <Form.Label className="form-check-label" htmlFor="form2Example34"> Remember me </Form.Label>
            </div>
          </div>
      
          <div className="col">
            {/* <!-- Simple link --> *
            <a href="#!">Forgot password?</a>
          </div>
        </div>
      
        {/* <!-- Submit button --> *
        <Button type="submit" className="btn btn-primary btn-block mb-4">Sign in</Button>
      
        {/* <!-- Register buttons --> *
        <div className="text-center">
          <p>Not a member? <a href="#!">Register</a></p>
          <p>or sign up with:</p>
          <Button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </Button>
      
          <Button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-google"></i>
          </Button>
      
          <Button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </Button>
      
          <Button type="button" className="btn btn-primary btn-floating mx-1">
            <i className="fab fa-github"></i>
          </Button>
        </div>
      </Form> */}
  // <div>
        //     <Form onSubmit={myFormik.handleSubmit}>
        //         <FormGroup className="mb-3" >
        //             <FormLabel> user name</FormLabel>
        //             <FormControl onBlur={myFormik.handleChange} name="name" id={'name'} placeholder="press your name" />
        //             {myFormik.errors.name ? <FormText >{myFormik.errors.name}</FormText> : ''}
        //         </FormGroup>
        //         <Form.Group className="mb-3" >
        //             <FormLabel> password</FormLabel>
        //             <FormControl onBlur={myFormik.handleChange} name="password" type='password' id="password" placeholder="press your password" />
        //         </Form.Group>
        //         <Button type={"submit"}>Login</Button>
        //     </Form>
        // </div>
      return (     <section className="vh-100">
        <div className="container-fluid h-custom">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="img-fluid" alt="Sample image"></img>
            </div>
            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
              <Form onSubmit={myFormik.handleSubmit}>
                <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                  <p className="lead fw-normal mb-0 me-3">Sign in with</p>
                  <Button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </Button>
      
                  <Button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </Button>
      
                  <Button type="button" className="btn btn-primary btn-floating mx-1">
                    <i className="fab fa-linkedin-in"></i>
                  </Button>
                </div>
      
                <div className="divider d-flex align-items-center my-4">
                  <p className="text-center fw-bold mx-3 mb-0">Or</p>
                </div>
      
                {/* <!-- Email input --> */}
                <div className="form-outline mb-4">
                  <Form.Control  onBlur={myFormik.handleChange}  type="email" id="email" className="form-control form-control-lg"
                    placeholder="Enter a valid email address" ></Form.Control>
                  <label className="form-label" htmlFor="email">Email address</label>
                </div>
      
                {/* <!-- Password input --> */}
                <div className="form-outline mb-3">
                  <Form.Control  onBlur={myFormik.handleChange}  type="password" id="password" className="form-control form-control-lg"
                    placeholder="Enter password" ></Form.Control>
                  <Form.Label className="form-label" htmlFor="password">Password</Form.Label>
                </div>
                {myFormik.errors.password ?  '':<div id="validationServer03Feedback" className="invalid-feedback">{ myFormik.errors.password}ok</div> }

      
                <div className="d-flex justify-content-between align-items-center">
                  {/* <!-- Checkbox --> */}
                  <div className="form-check mb-0">
                    <Form.Control className="form-check-input me-2" type="checkbox" value="" id="form2Example3" ></Form.Control>
                    <Form.Label className="form-check-label" htmlFor="form2Example3">
                      Remember me
                      </Form.Label>

                  </div>
                  <a href="#!" className="text-body">Forgot password?</a>
                </div>
      
                <div className="text-center text-lg-start mt-4 pt-2">
                  <Button type="submit" className="btn btn-primary btn-lg"
                  id='btn'  >Login</Button>
                  <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="#!"
                      className="link-danger">Register</a></p>
                </div>
      
              </Form>
            </div>
          </div>
        </div>
        <div
          className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
          {/* <!-- Copyright --> */}
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          {/* <!-- Copyright --> */}
      
          {/* <!-- Right --> */}
          <div>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          {/* <!-- Right --> */}
        </div>
      </section>
   
    );
}

export default Login;