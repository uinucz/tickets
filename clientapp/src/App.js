import React, { useEffect } from "react"
import Navigation from "./Navigation"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import MainPage from "./MainPage"
import Movie from "./Movie"
import LoginForm from "./Users/LoginForm"
import Tickets from "./Tickets"
import { useStore } from "./Users/store"
import { observer } from "mobx-react-lite"

function App() {
	const { commonStore, userStore } = useStore()
	useEffect(() => {
		if (commonStore.token) {
			userStore.getUser().finally(() => commonStore.setAppLoaded)
		} else {
			commonStore.setAppLoaded()
		}
	}, [commonStore, userStore])
	//if (!commonStore.appLoaded) return <h1>loading</h1>
	return (
		<Router>
			<Navigation />
			<br />

			<Switch>
				<Route path="/movies/:id">
					<Movie />
				</Route>
				<Route path="/tickets">
					<Tickets />
				</Route>
				<Route path="/account">
					<LoginForm />
				</Route>
				<Route path="/">
					<MainPage />
				</Route>
			</Switch>
		</Router>
	)
}

export default observer(App)
