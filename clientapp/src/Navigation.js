import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { store, StoreContext, useStore } from "./Users/store"

export default observer(function Navigation() {
	const { userStore } = useStore()
	return (
		<Navbar
			bg="light"
			expand="lg"
			className="shadow-sm p-3 mb-5 bg-white rounded"
		>
			<Container>
				<Navbar.Brand>
					<p className="font-italic">tickets</p>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link>
							<NavLink exact activeClassName="active" to="">
								Сейчас в кино
							</NavLink>
						</Nav.Link>
						<Nav.Link>
							<NavLink exact activeClassName="active" to="/tickets">
								Мои билеты
							</NavLink>
						</Nav.Link>

						{userStore.isLoggedin ? (
							<Nav.Link>
								<NavLink
									exact
									activeClassName="active"
									to="/account"
									onClick={() => {
										userStore.logout()
									}}
								>
									Выход
								</NavLink>
							</Nav.Link>
						) : (
							<Nav.Link>
								<NavLink exact activeClassName="active" to="/account">
									Вход/Регистрация
								</NavLink>
							</Nav.Link>
						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
})
