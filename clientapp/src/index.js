import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "./styles.css"
import { store, StoreContext } from "./Users/store"
import { createBrowserHistory } from "history"
import { Router } from "react-router-dom"

ReactDOM.render(
	<StoreContext.Provider value={store}>
		<App />
	</StoreContext.Provider>,
	document.getElementById("root")
)
