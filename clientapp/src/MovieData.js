import React from "react"
import { Container, Image } from "react-bootstrap"

export default function MovieData({ movieData }) {
  return (
    <Container style={{ display: "flex", flexDirection: "row" }}>
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
