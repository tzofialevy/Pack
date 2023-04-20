import { useFormik } from 'formik';
import React, { FC, useEffect } from 'react';
import { User } from '../../types/user'
import * as Yup from 'yup'
import './Register.scss';
import { Button, Form } from 'react-bootstrap';

interface RegisterProps { }

const Register: FC<RegisterProps> = () => {

  useEffect(() => { }, [])
  const sendDitails = () => {

  }
  const myFormik= useFormik({
    initialValues:{
    } as User,
    onSubmit: sendDitails,
    validationSchema: Yup.object().shape({
      // name:string,
      // password:string,
      // email?:string,
      // gender?:"female"|"male"|""
      name: Yup.string().required('שדה חובה'),
      password:Yup.string().required('שדה חובה').min(4).typeError("you must press at last 4 charcters"),
      email:Yup.string().required('שדה חובה'),
      genderl:Yup.string().required('שדה חובה')
    })
  })


  return <div>
  <Form onSubmit={myFormik.handleSubmit}>
      <Form.Group className="mb-3" >
          <Form.Label> user name</Form.Label>
          <Form.Control onBlur={myFormik.handleChange} name="name" id={'name'} placeholder="press your name" />
          {myFormik.errors.name ? <Form.Text >{myFormik.errors.name}</Form.Text> : ''}
      </Form.Group>
      <Form.Group className="mb-3" >
          <Form.Label> password</Form.Label>
          <Form.Control onBlur={myFormik.handleChange} name="password" type='password' id="password" placeholder="press your password" />
          {myFormik.errors.password ? <Form.Text>{myFormik.errors.password}</Form.Text> : ''}
      </Form.Group>
      <Form.Group className="mb-3" >
          <Form.Label> email</Form.Label>
          <Form.Control onBlur={myFormik.handleChange} name="email" id={'email'} type={"email"} placeholder="press your email" />
          {myFormik.errors.email ? <Form.Text >{myFormik.errors.email}</Form.Text> : ''}
      </Form.Group>
      <Form.Group className="mb-3" >
      <Form.Label>gender</Form.Label>
          <Form.Select onBlur={myFormik.handleChange} name="gender" id={'gender'} placeholder="press your gender" >
            {/* <option selected>press your gender</option> */}
            <option >male</option>
            <option>female</option>
            <option selected>other</option>
          </Form.Select>
          {myFormik.errors.gender ? <Form.Text >{myFormik.errors.gender}</Form.Text> : ''}
      </Form.Group>
      <Button type={"submit"}>Login</Button>
  </Form>
</div>
};

export default Register;


