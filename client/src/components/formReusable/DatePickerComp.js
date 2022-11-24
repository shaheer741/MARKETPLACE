import React from 'react'
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Field } from 'formik';
import { FormHelperText } from '@mui/material';
import FormControl from '@mui/material/FormControl';

function DatePickerComp(props) {
   const { name, value, label, helperText, ...rest } = props
   return (
      <div className='field-control'>
         <FormControl>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
               <Field name={name} >
                  {({ form, field }) => {
                     const { setFieldValue } = form
                     const { value } = field
                     return (
                        <DatePicker
                           label={label}
                           {...field}
                           {...rest}
                           selected={value}
                           onChange={(val) => setFieldValue(name, val)}
                           renderInput={(params) => <TextField {...params} />} />
                     )
                  }}
               </Field>
               <FormHelperText className='error-color' >{helperText}</FormHelperText>
            </LocalizationProvider>
         </FormControl>

      </div>
   )
}

export default DatePickerComp