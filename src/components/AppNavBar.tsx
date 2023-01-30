import { Navbar, Container, Image } from "react-bootstrap";

function AppNavBar() {
    const logo = require("../assets/images/logo2.jpeg");

    return (
        <>
            <Navbar bg="dark">
                <Container fluid className="ps-5 pe-5">
                    <Navbar.Brand href="/">
                        <Image src={logo} width="35" className="rounded-4" />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    );
}

export default AppNavBar;