import { Container } from "react-bootstrap";
import AppNavBar from "../../components/AppNavBar";

function Departments() {

    return (
        <Container fluid className="p-3 text-white">
            <AppNavBar origin="theo" />
            <h1>Departments</h1>
            <h2>Features</h2>
            <ul>News for dues</ul>
            <ul>Teachers can post updates for tests or whatever</ul>
        </Container>

    );
}

export default Departments;