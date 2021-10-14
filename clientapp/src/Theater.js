import React, { Fragment, useState } from "react"
import { Container, Row, Badge } from "react-bootstrap"
import { nanoid } from "nanoid"

export default function Theater() {
	const [circles, setCircles] = useState(
		new Array(5).fill(new Array(10).fill(false))
	)
	function handleCheck(i, j) {
		setCircles((circles) => {
			var x = JSON.parse(JSON.stringify(circles))
			x[i][j] = !x[i][j]
			return x
		})
	}
	//edit
	return (
		<Fragment>
			<Container
				className="theater mb-5"
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				{circles.map((x, i) => (
					<div style={{ display: "flex", flexDirection: "row" }} key={nanoid()}>
						{x.map((y, j) => (
							<div
								key={nanoid()}
								id={circles[i][j] ? "circlePicked" : "circle"}
								className="m-1"
								onClick={() => handleCheck(i, j)}
								style={{ cursor: "pointer" }}
							></div>
						))}
					</div>
				))}
			</Container>
			<Container className="overflow-auto  " style={{ height: "5rem" }}>
				<h5>
					{circles.map((x, i) =>
						x.map((y, j) => {
							return (
								circles[i][j] && (
									<Badge pill variant="primary" className="mr-2" key={nanoid()}>
										Ряд {i + 1}, место {j + 1}
									</Badge>
								)
							)
						})
					)}
				</h5>
			</Container>
		</Fragment>
	)
}
