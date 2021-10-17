import React, { useState, useEffect } from "react"
import axios from "axios"
import { Container, Button, Modal } from "react-bootstrap"
import LeftModal from "./LeftModal"
import RightModal from "./RightModal"
import { useStore } from "./Users/store"

const pathBooking = process.env.REACT_APP_BOOKING_URL
const pathScreening = process.env.REACT_APP_SCREENING_URL
console.log(pathBooking, pathScreening)

export default function ModalBody({ show, handleClose, chosenScreening }) {
	const { userStore } = useStore()
	const [bookingData, setBookingData] = useState(null)
	const [circles, setCircles] = useState(null)

	function handleCheck(i, j) {
		setCircles((circles) => {
			var x = JSON.parse(JSON.stringify(circles))
			if (x[i][j] === 0) x[i][j] = 1
			else if (x[i][j] === 1) x[i][j] = 0
			return x
		})
	}
	function bookSeats() {
		var vals = []
		circles.flat().forEach((x, i) => {
			if (x === 1) vals.push(i)
		})
		if (vals.length !== 0) {
			axios.post(`${pathBooking}/${chosenScreening}`, vals).then(() => {
				let c = []
				for (let i = 0; i < 5; i++) {
					c.push([])
					for (let j = 0; j < 10; j++) {
						circles[i][j] === 1 ? c[i].push(2) : c[i].push(0)
					}
				}
				setCircles(c)
			})
			handleClose()
		}
	}
	useEffect(() => {
		if (chosenScreening) callAPI()
		function callAPI() {
			axios.get(`${pathBooking}/${chosenScreening}`).then((res) => {
				let c = []
				for (let i = 0; i < 5; i++) {
					c.push([])
					for (let j = 0; j < 10; j++) {
						c[i].push(0)
					}
				}
				res.data.forEach((t) => {
					var row = parseInt(t.seat / 10)
					var seat = t.seat % 10
					c[row][seat] = 2
				})
				setCircles(c)
			})
		}
	}, [chosenScreening])
	useEffect(() => {
		if (chosenScreening) callApi()
		function callApi() {
			axios.get(`${pathScreening}/${chosenScreening}`).then((res) => {
				setBookingData(res.data)
			})
		}
	}, [chosenScreening])

	return (
		<Modal
			show={show}
			onHide={handleClose}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			size="lg"
		>
			{bookingData && circles ? (
				<>
					<Modal.Body>
						<Container
							style={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<LeftModal bookingData={bookingData} />
							<RightModal circles={circles} handleCheck={handleCheck} />
						</Container>
					</Modal.Body>
					<Modal.Footer
						style={{
							display: "flex",
							justifyContent: "space-between",
						}}
					>
						<Button variant="dark" onClick={handleClose}>
							Закрыть
						</Button>
						<Button
							variant={userStore.isLoggedin ? "primary" : "outline-primary"}
							onClick={userStore.isLoggedin ? bookSeats : () => {}}
						>
							{userStore.isLoggedin ? (
								<>Зарезервировать</>
							) : (
								<>Необходима авторизация</>
							)}
						</Button>
					</Modal.Footer>
				</>
			) : (
				<></>
			)}
		</Modal>
	)
}
