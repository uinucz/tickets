import React from "react"
import { Container, Image } from "react-bootstrap"
import { observer } from "mobx-react-lite"
import { store, StoreContext, useStore } from "./Users/store"

const MovieData = ({ movieData }) =>{
	const { userStore } = useStore()

	return (
		<Container style={{ display: "flex", flexDirection: "row" }}>
			{userStore.isLoggedin ? <h1>LOGGGGEDIN</h1> : <h1>not logged in</h1>}
			<p onClick={()=>userStore.increase()} className="font-italic">{userStore.userNumber}</p>
			<Image
				src={movieData.pic}
				rounded
				style={{ height: "20rem" }}
				className="mr-4"
			/>
			<Container style={{ display: "flex", flexDirection: "column" }}>
				<h1>{movieData.name}</h1>
				<br />
				<p>{movieData.body}</p>
			</Container>
		</Container>
	)
}
export default observer( MovieData)