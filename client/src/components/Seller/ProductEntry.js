import { Form, Formik } from 'formik'
import React,{useState} from 'react'
import * as Yup from 'yup'
import Button from '@mui/material/Button';
import FormikControl from '../formReusable/FormikControl'
import axios from 'axios'

const initialValues = {
   name: '',
   description: '',
   price: '',
   image: ''
}
const validationSchema = Yup.object({
   name: Yup.string().required('required'),
   email: Yup.string().required('Email is required').email('invalid email address'),
   password: Yup.string().required(),
   birthDate: Yup.date().required('Select your DOB').nullable()
   // address: Yup.string().required('Address is necessary'),
   // gender: Yup.string().required('Please Select your Gender'),
   // province: Yup.string().required('Please Select your province'),
   // subjects: Yup.array().min(1, 'Required'),

})

function ProductEntry() {
   const [image, setImage] = useState('')
   console.log(image)

   return (
      <Formik
         initialValues={initialValues}
         validationSchema={validationSchema}
         // onSubmit={onSubmit}
         validateOnChange={false}
         validateOnBlur={false}>
         {
            formik => {
               const { values, errors } = formik
               // console.log('formik props', formik)
               const onSubmit = () => {
                  const formData = new FormData()
                  formData.append('name', values.name)
                  formData.append('description', values.description)
                  formData.append('price', values.price)
                  formData.append('image', image)
                  axios.post('http://localhost:5000/addproduct', formData)
                     .then((response) => console.log(response))
                     .catch((err) => console.log(err))

               }
               return (
                  < Form >
                     {/* Following props must be passed to FormikControl components
                     1-control  2-name  3-label 4-formikProps 5-value 6-error 7- helperText
                     Addditional Props that can be passed
                     1-placeholder  2-type */}

                     <FormikControl control='input' name='name' label=' Name' placeholder='Enter your Name' value={values.name} error={errors.name} helperText={errors.name} formikProps={formik} />

                     <FormikControl control='input' type='textarea' name='description' label=' description' placeholder='Should be 25 words' value={values.description} error={errors.description} helperText={errors.description} formikProps={formik} />

                     <FormikControl control='input' name='price' label=' Price' value={values.price} error={errors.price} helperText={errors.price} formikProps={formik} />

                     <input type='file' onChange={(e)=>setImage(e.target.files[0])}/>
                     
                     <Button variant='contained' type='submit' onClick={onSubmit}>ADD PRODUCT</Button>

                  </Form>)
            }
         }
      </Formik>
   )
}
export default ProductEntry