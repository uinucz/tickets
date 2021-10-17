import React from "react"
import { Container, Image, Badge } from "react-bootstrap"
import Moment from "react-moment"
import Theater from "./Theater"

export default function RightModal({ circles, handleCheck }) {
	return (
		<Container
			className="justify-content-center"
			style={{
				display: "flex",
				flexDirection: "column",
			}}
		>
			<p className="text-center">Экран</p>
			<Badge pill className="mb-5" variant="info">
				{" "}
			</Badge>
			<Theater circles={circles} handleCheck={handleCheck} />
		</Container>
	)
}
