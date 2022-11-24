import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import FormikControl from '../formReusable/FormikControl'
import axios from 'axios'

const initialValues = {
  email: '',
  password: ''
}
const validationSchema = Yup.object({
  // name: Yup.string().required('required'),
  email: Yup.string().required('Email is required').email('invalid email address'),
  password: Yup.string().required(),
  // birthDate: Yup.date().required('Select your DOB').nullable()
  // address: Yup.string().required('Address is necessary'),
  // gender: Yup.string().required('Please Select your Gender'),
  // province: Yup.string().required('Please Select your province'),
  // subjects: Yup.array().min(1, 'Required'),

})
const onSubmit = (data) => {
  axios.post('http://localhost:5000/userlogin', data)
}

function UserLogin() {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      validateOnChange={false}
      validateOnBlur={false}>
      {
        formik => {
          const { values, errors } = formik
          // console.log('formik props', formik)

          return (
            < Form >
              {/* Following props must be passed to FormikControl components
                     1-control  2-name  3-label 4-formikProps 5-value 6-error 7- helperText
                     Addditional Props that can be passed
                     1-placeholder  2-type */}

              <FormikControl control='input' type='email' name='email' label=' Email' placeholder='Enter your email' value={values.email} error={errors.email} helperText={errors.email} formikProps={formik} />

              <FormikControl control='input' type='password' name='password' label='Set your password' placeholder='Enter your password' value={values.password} error={errors.password} helperText={errors.password} formikProps={formik} />

              <Button variant='contained' type='submit'>LOG IN</Button>

            </Form>)
        }
      }
    </Formik>
  )
}
export default UserLogin