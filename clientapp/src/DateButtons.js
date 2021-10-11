import React from "react"
import { Container, ButtonGroup, Button } from "react-bootstrap"
import { nanoid } from "nanoid"
import Moment from "react-moment"

export default function DateButtons({ screeningDays, handleDateChosen }) {
  return (
    <Container
      style={{ display: "flex", flexDirection: "row" }}
      className="mt-3"
    >
      <Container>
        <ButtonGroup size="lg" className="mb-2">
          {screeningDays.map((sd) => (
            <Button
              key={nanoid()}
              variant="outline-primary"
              onClick={() => handleDateChosen(sd.day)}
            >
              <Moment format="dddd MMM d">{sd.day}</Moment>
            </Button>
          ))}
        </ButtonGroup>
      </Container>
    </Container>
  )
}
