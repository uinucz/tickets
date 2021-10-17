import React, { useState } from "react"
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
import { useHistory } from "react-router-dom"

export default observer(function LoginForm() {
	const { userStore } = useStore()
	const [mode, setMode] = useState("login")
	let history = useHistory()
	return (
		<Container style={{ width: "20rem" }}>
			<div className="text-center">
				<span
					style={{ cursor: "pointer" }}
					onClick={() => setMode("login")}
					className={mode === "login" ? "active" : ""}
				>
					Вход
				</span>{" "}
				/{" "}
				<span
					style={{ cursor: "pointer" }}
					onClick={() => setMode("registration")}
					className={mode === "registration" ? "active" : ""}
				>
					Регистрация
				</span>
			</div>
			{mode === "login" ? (
				<Formik
					initialValues={{
						email: "eric@gmail.com",
						password: "Password1",
						error: "null",
					}}
					onSubmit={(values, { setErrors }) =>
						userStore
							.login(values)
							.then(history.push("/"))
							.catch((error) => {
								setErrors({ error: "fail" })
								console.log(error)
							})
					}
				>
					{({ handleSubmit, isSubmitting, errors }) => (
						<Form onSubmit={handleSubmit} autoComplete="off">
							<TextInput placeholder="email" name="email" label="Email" />
							<TextInput
								placeholder="password"
								name="password"
								label="Пароль"
							/>
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
			) : (
				<Formik
					initialValues={{
						email: "",
						password: "",
						username: "",
						error: "",
					}}
					onSubmit={(values, { setErrors }) =>
						userStore
							.register(values)
							.then(history.push("/"))
							.catch((error) => {
								setErrors({ error: "fail" })
								console.log(error)
							})
					}
				>
					{({ handleSubmit, isSubmitting, errors }) => (
						<Form onSubmit={handleSubmit} autoComplete="off">
							<TextInput placeholder="email" name="email" label="Email" />
							<TextInput
								placeholder="password"
								name="password"
								label="Пароль"
							/>
							<TextInput
								placeholder="Username"
								name="Username"
								label="Username"
							/>
							<ErrorMessage
								name="error"
								render={() => <Alert variant="primary">{errors.error}</Alert>}
							/>

							<Button variant="success" type="submit">
								{isSubmitting ? <>...</> : <>зарегистрироваться</>}
							</Button>
						</Form>
					)}
				</Formik>
			)}
		</Container>
	)
})
