import React from "react"
import { Container, Nav, Navbar } from "react-bootstrap";
import './Header.css'

const Header = () => {
    return (
        <header>
            <Navbar bg="white" expand="lg">
                <Container>
                    <a href="/" id="a_header"><Navbar.Brand id="header_css"><img src="/image/logo.jpg" width={"170"}></img> 캠퍼스맵 </Navbar.Brand></a>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;