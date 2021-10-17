import React, { useState, useEffect, Fragment } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { nanoid } from "nanoid"
import Moment from "react-moment"
import ModalBody from "./ModalBody"
import MovieData from "./MovieData"
import DateButtons from "./DateButtons"
import TheaterDate from "./TheaterDate"

export default function Movie() {
	const [movieData, setMovieData] = useState(null)
	const [chosenDay, setChosenDay] = useState(null)
	const [chosenScreening, setChosenScreening] = useState(null)
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => setShow(true)
	const id = useParams().id
	function handleDateChosen(x) {
		setChosenDay(x)
	}
	function handleScreeningChosen(x) {
		setChosenScreening(x)
	}

	useEffect(() => {
		if (id != null) {
			callApi()
		}
		function callApi() {
			axios.get(`https://localhost:44377/Movie/${id}`).then((res) => {
				setMovieData(res.data)
			})
		}
	}, [])

	return (
		<Fragment>
			{movieData && (
				<Fragment>
					<MovieData movieData={movieData} />
					<br />
					<DateButtons
						screeningDays={movieData.screeningDays}
						handleDateChosen={handleDateChosen}
						chosenDay={chosenDay}
					/>
					<br />
					{chosenDay &&
						movieData.screeningDays
							.find((x) => x.day === chosenDay)
							.screeningTheaters.map((a) => (
								<TheaterDate
									key={nanoid()}
									theaterDate={a}
									handleShow={handleShow}
									handleScreeningChosen={handleScreeningChosen}
								/>
							))}
				</Fragment>
			)}
			<ModalBody
				show={show}
				handleClose={handleClose}
				chosenScreening={chosenScreening}
			/>
		</Fragment>
	)
}
