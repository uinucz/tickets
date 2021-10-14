import React from "react"
import { Navbar, Nav, Container } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { store, StoreContext, useStore } from "./Users/store"

const Navigation = () =>{
	const { userStore } = useStore()
	return (
		<Navbar
			bg="light"
			expand="lg"
			className="shadow-sm p-3 mb-5 bg-white rounded"
		>
			<Container>
				{/* <Navbar.Brand>
					<p className="font-italic">tickets</p>
				</Navbar.Brand> */}
				{/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
 							<Link className="nav-link"exact activeClassName="active" to="">
								Сейчас в кино
							</Link>
						 
							<Link  className="nav-link" exact activeClassName="active" to="/tickets">
								Мои билеты
							</Link>
						 

						<Navbar.Brand>
					<p onClick={()=>userStore.increase()} className="font-italic">{userStore.userNumber}</p>
				</Navbar.Brand>
						{userStore.isLoggedin ? (
 								<Link  className="nav-link"
									exact
									activeClassName="active"
									to="/account"
									onClick={() => {
										userStore.logout()
									}}
								>
									Выход
								</Link>
 						) : (
 								<Link className="nav-link" exact activeClassName="active" to="/account">
									Вход/Регистрация
								</Link>
 						)}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
} 

export default observer( Navigation)