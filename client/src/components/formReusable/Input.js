import React from 'react'
import TextField from '@mui/material/TextField';

function Input(props) {
   const { name, label, value, formikProps, ...rest } = props
   const { handleChange } = formikProps

   return (
      <div className='field-control'>

         <TextField id={name} name={name} label={label} value={value} onChange={handleChange}
            {...rest} >
         </TextField>
      </div>
   )
}

export default Input