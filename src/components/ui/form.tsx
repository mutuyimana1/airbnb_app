import * as React from "react"
import type { JSX } from "react"

import { 
  Form as FormPrimitive, 
  Field as FormFieldPrimitive, 
  Control as FormControlPrimitive, 
  Label as FormLabelPrimitive, 
  Message as FormMessagePrimitive 
} from "@radix-ui/react-form"
import { Controller } from 'react-hook-form'

export const Form = FormPrimitive

export const FormField = ({ control, name, render }: { control: any; name: string; render: (field: any) => JSX.Element }) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <FormFieldPrimitive name={name}>
          {render(field)}
        </FormFieldPrimitive>
      )}
    />
  )
}

export const FormItem = ({ children }: { children: React.ReactNode }) => <div>{children}</div>
export const FormLabel = FormLabelPrimitive
export const FormMessage = FormMessagePrimitive
export const FormControl = FormControlPrimitive