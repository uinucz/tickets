import axios from "axios"
import React, { useState, useEffect } from "react"
import { Container, Image, Button } from "react-bootstrap"
import Moment from "react-moment"
import { nanoid } from "nanoid"
import { useStore } from "./Users/store"

const path = process.env.REACT_APP_BOOKING_URL

export default function Tickets() {
	const [tickets, setTickets] = useState(null)
	const { userStore } = useStore()

	useEffect(() => {
		callAPI()
		function callAPI() {
			axios.get(path).then((res) => setTickets(res.data))
		}
	}, [])

	function deleteBooking(id) {
		axios.delete(`${path}/${id}`)
		setTickets((tickets) => tickets.filter((t) => t.bookingId != id))
	}

	return (
		<>
			{userStore.isLoggedin ? (
				tickets && (
					<Container>
						{tickets.length != 0 ? (
							<>
								{tickets.map((t) => (
									<Container
										style={{
											display: "flex",
											flexDirection: "row",
										}}
										className="m-2 border-top"
										key={nanoid()}
									>
										<Image src={t.image} style={{ height: "6rem" }} />
										<Container>
											<h5>{t.movieName}</h5>
											{t.theaterName}, {t.theaterAddress}
											<br />
											<Moment format="dddd, MMM d">{t.time}</Moment>
										</Container>
										<Container>
											<h3 className="m-0">
												<Moment format="hh:mm">{t.time}</Moment>
											</h3>
											<h4>
												{parseInt(t.seat / 10) + 1} ряд, {(t.seat % 10) + 1}{" "}
												место
											</h4>
											<Button
												size="sm"
												onClick={() => deleteBooking(t.bookingId)}
												variant="outline-warning"
											>
												Отменить резервацию
											</Button>
										</Container>
									</Container>
								))}
							</>
						) : (
							<h1>У вас пока нет билетов</h1>
						)}
					</Container>
				)
			) : (
				<Container>
					<h1>Необходима авторизация</h1>
				</Container>
			)}
		</>
	)
}
