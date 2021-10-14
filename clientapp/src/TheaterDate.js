import React from "react"
import { Container, ButtonGroup, Button } from "react-bootstrap"
import { nanoid } from "nanoid"
import Moment from "react-moment"

export default function TheaterDate({
	theaterDate,
	handleShow,
	handleScreeningChosen,
}) {
	return (
		<Container
			style={{ display: "flex", flexDirection: "row" }}
			className="border-top"
		>
			<Container className="mt-2">
				<h3>{theaterDate.theater.name}</h3>
				<p>{theaterDate.theater.address}</p>
			</Container>
			<Container className="mt-2">
				{theaterDate.screenings.map((x) => (
					<Button
						key={nanoid()}
						className="m-1"
						size="sm"
						variant="outline-info"
						onClick={() => {
							handleShow()
							handleScreeningChosen(x.screeningId)
							console.log("screening id", x.screeningId)
						}}
					>
						<Moment format="hh:mm">{x.time}</Moment>
					</Button>
				))}
			</Container>
		</Container>
	)
}
