import React from "react"
import { Container, ButtonGroup, Button, Card } from "react-bootstrap"
import { nanoid } from "nanoid"
import Moment from "react-moment"

export default function DateButtons({ screeningDays, handleDateChosen }) {
	return (
		// <Container
		//   style={{ display: "flex", flexDirection: "row" }}
		//   className="mt-3"
		// >
		//   <Container>
		//     <ButtonGroup size="lg" className="mb-2">
		//       {screeningDays.map((sd) => (
		//         <Button
		//           key={nanoid()}
		//           variant="outline-primary"
		//           onClick={() => handleDateChosen(sd.day)}
		//         >
		//           <Moment format="dddd MMM d">{sd.day}</Moment>
		//         </Button>
		//       ))}
		//     </ButtonGroup>
		//   </Container>
		// </Container>
		<Container
			style={{ display: "flex", flexDirection: "row" }}
			className="border-top"
		>
			{screeningDays.map((sd) => (
				<Card
					className="mt-2 border-0"
					style={{
						width: "11rem",
						height: "5rem",
						cursor: "pointer",
					}}
					key={nanoid()}
					onClick={() => handleDateChosen(sd.day)}
				>
					<Card.Body>
						<Moment format="dddd MMM d">{sd.day}</Moment>
					</Card.Body>
				</Card>
			))}
		</Container>
	)
}
