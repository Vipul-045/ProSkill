import React from 'react'
import { Controller, FieldValues, Control, Path } from 'react-hook-form'

interface FormFieldProps<T extends FieldValues> {
    control: Control<T>;
    name: string;
    label: string;
    placeholder: string;
    type?: string;
    }

const FormField = ({control, name, label, placeholder, type='text'}: FormFieldProps<T>) => {
  return (
    <Controller name={name} control={control} render={({ field }) => (
        <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
                <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
                This is your public display name.
            </FormDescription>
            <FormMessage />
        </FormItem>
    )} />    )

}

export default FormField