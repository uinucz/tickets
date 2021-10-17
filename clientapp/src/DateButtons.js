import React from "react"
import { Container, ButtonGroup, Button, Card } from "react-bootstrap"
import { nanoid } from "nanoid"
import Moment from "react-moment"

export default function DateButtons({
	screeningDays,
	handleDateChosen,
	chosenDay,
}) {
	return (
		<Container
			style={{ display: "flex", flexDirection: "row" }}
			className="border-top"
		>
			{screeningDays.map((sd) => (
				<Card
					className="mt-2 border-0"
					style={{
						width: "11rem",
						height: "4rem",
						cursor: "pointer",
					}}
					key={nanoid()}
					onClick={() => handleDateChosen(sd.day)}
				>
					<Card.Body className={sd.day === chosenDay ? "active" : ""}>
						<Moment format="dddd, MMM d">{sd.day}</Moment>
					</Card.Body>
				</Card>
			))}
		</Container>
	)
}
