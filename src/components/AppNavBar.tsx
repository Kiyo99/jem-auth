import { useEffect, useState } from "react";
import { Navbar, Container, Image, Nav } from "react-bootstrap";

type originProps = {
    origin: string;
}

function AppNavBar(props: originProps) {
    const logo = require("../assets/images/logo2.jpeg");
    const logo2 = require("../assets/images/theo.jpeg");

    const [width, setWidth] = useState("40");

    if (props.origin == "theo") {
        return <>
            <Navbar variant="dark" expand="md">
                <Container fluid>
                    <Navbar.Brand href="/" className="fw-bold">VVUSA</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/hostel">Hostel</Nav.Link>
                            <Nav.Link href="/cafeteria">Cafeteria</Nav.Link>
                            <Nav.Link href="/work-study">Work Study</Nav.Link>
                            <Nav.Link href="/departments">Departments</Nav.Link>
                        </Nav>
                        <Nav className="d-flex align-items-center">
                            <Nav.Link href="#settings"><i className="fa-solid fa-lg fa-gear"></i></Nav.Link>
                            <Nav.Link href="#notifications"><i className="fa-regular fa-lg fa-bell"></i></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar></>
    }

    return (
        <>
            <Navbar bg="dark">
                <Container fluid className="ps-5 pe-5">
                    <Navbar.Brand href="/">
                        <Image src={logo} width={width} className="rounded-4" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default AppNavBar;