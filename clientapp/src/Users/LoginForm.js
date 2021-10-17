import React from "react"
import { Formik, Form, ErrorMessage } from "formik"
import {
	Form as BootstrapForm,
	Button,
	Spinner,
	Alert,
	Container,
} from "react-bootstrap"
import TextInput from "./TextInput"
import { useStore } from "./store"
import { observer } from "mobx-react-lite"
import { useHistory } from "react-router"

export default observer(function LoginForm() {
	const { userStore } = useStore()
	const history = useHistory()
	return (
		<Container style={{ width: "20rem" }}>
			<Formik
				initialValues={{
					email: "eric@gmail.com",
					password: "Password1",
					error: "null",
				}}
				onSubmit={(values, { setErrors }) =>
					userStore.login(values).catch((error) => {
						setErrors({ error: "fail" })
						console.log(error)
					})
				}
			>
				{({ handleSubmit, isSubmitting, errors }) => (
					<Form onSubmit={handleSubmit} autoComplete="off">
						<TextInput placeholder="email" name="email" label="Email" />
						<TextInput placeholder="password" name="password" label="Пароль" />
						<ErrorMessage
							name="error"
							render={() => <Alert variant="primary">{errors.error}</Alert>}
						/>

						<Button variant="success" type="submit">
							{isSubmitting ? <>...</> : <>войти</>}
						</Button>
					</Form>
				)}
			</Formik>
		</Container>
	)
})
