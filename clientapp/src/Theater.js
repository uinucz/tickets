import React, { Fragment, useState } from "react"
import { Container, Row, Badge } from "react-bootstrap"
import { nanoid } from "nanoid"

export default function Theater({ circles, handleCheck }) {
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
								id={
									circles[i][j] === 0
										? "circle"
										: circles[i][j] === 1
										? "circlePicked"
										: "circleReserved"
								}
								className="m-1"
								onClick={() => handleCheck(i, j)}
								style={{ cursor: circles[i][j] !== 2 ? "pointer" : "default" }}
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
								circles[i][j] === 1 && (
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
