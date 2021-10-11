import React from "react"
import { Container, Image } from "react-bootstrap"
import Moment from "react-moment"

export default function LeftModal({ bookingData }) {
  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        width: "12rem",
      }}
    >
      <Image src={bookingData.movie.pic} rounded className="mr-4" />
      <br />
      <h3>{bookingData.movie.name}</h3>
      {bookingData.theater.name}, {bookingData.theater.address}
      <h1>
        <Moment format="hh:mm">{bookingData.time}</Moment>
      </h1>
      <p>
        <Moment format="dddd MMM d">{bookingData.time}</Moment>
      </p>
    </Container>
  )
}
