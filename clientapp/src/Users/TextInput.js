import React from "react"
import { Form, useField } from "formik"
import { Form as BForm } from "react-bootstrap"

export default function TextInput(props) {
	const [field, meta] = useField(props.name)
	return (
		<BForm.Group error={meta.touched && !!meta.error}>
			<BForm.Label>{props.label}</BForm.Label>
			<BForm.Control {...field} {...props} />
		</BForm.Group>
	)
}
