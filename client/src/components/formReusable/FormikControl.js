import React from 'react'
import DatePickerComp from './DatePickerComp'

import Input from './Input'

function FormikControl(props) {
   const { control, ...rest } = props
   switch (control) {
      case 'input':
         return <Input {...rest} />
      case 'date':
         return <DatePickerComp {...rest} />
     
      default: return null
   }
}

export default FormikControl