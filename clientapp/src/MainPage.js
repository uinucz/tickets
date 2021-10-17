import React, { useState, useEffect, Fragment } from "react"
import { Container, Carousel, Card, Button, Modal, Nav } from "react-bootstrap"
import axios from "axios"
import { nanoid } from "nanoid"
import ModalBody from "./ModalBody"
import { Link } from "react-router-dom"

const path = process.env.REACT_APP_MOVIE_URL
console.log("this is path", path)

export default function MainPage() {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		callApi()
		function callApi() {
			axios.get(path).then((res) => setMovies(res.data))
		}
	}, [])

	return (
		<Container>
			<Container style={{ display: "flex", flexDirection: "row" }}>
				{movies.map((movie) => (
					<Card
						key={nanoid()}
						className="border-0 m-1"
						style={{ width: "9rem", height: " " }}
					>
						<Link to={`/movies/${movie.id}`} style={{ fontSize: "smaller" }}>
							<Card.Img
								style={{ cursor: "pointer" }}
								variant="top"
								src={movie.pic}
							/>
						</Link>
						{movie.name}
						<Link to={`/movies/${movie.id}`} style={{ fontSize: "smaller" }}>
							купить билеты
						</Link>
					</Card>
				))}
			</Container>
		</Container>
	)
}
