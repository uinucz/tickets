import React, { useState, useEffect } from "react"
import axios from "axios"
import {
	Container,
	Carousel,
	Card,
	Button,
	Modal,
	Image,
	Badge,
} from "react-bootstrap"
import Moment from "react-moment"

import LeftModal from "./LeftModal"
import RightModal from "./RightModal"

export default function ModalBody({ show, handleClose, chosenScreening }) {
	const [bookingData, setBookingData] = useState(null)
	const [chosenSeats, setChosenSeats] = useState([])
	useEffect(() => {
		console.log("chosen screening", chosenScreening)
		if (chosenScreening) callApi()
		function callApi() {
			axios
				.get(`https://localhost:44377/Screening/${chosenScreening}`)
				.then((res) => {
					setBookingData(res.data)
				})
		}
		console.log("usef")
	}, [chosenScreening])

	return (
		<Modal
			show={show}
			onHide={handleClose}
			aria-labelledby="contained-modal-title-vcenter"
			centered
			size="lg"
		>
			{bookingData ? (
				<>
					<Modal.Body>
						<Container
							style={{
								display: "flex",
								flexDirection: "row",
							}}
						>
							<LeftModal bookingData={bookingData} />
							<RightModal />
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
						<Button variant="primary" onClick={handleClose}>
							Зарезервировать
						</Button>
					</Modal.Footer>
				</>
			) : (
				<></>
			)}
		</Modal>
	)
}
