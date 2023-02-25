import { Container, Card, Button } from "react-bootstrap";
import AppNavBar from "../../components/AppNavBar";

function Departments() {

    return (
        <Container fluid className="p-3 text-white">
            <AppNavBar origin="theo" />
            <h1>Departments</h1>
            <h2>Features</h2>
            <ul>News for dues</ul>
            <ul>Teachers can post updates for tests or whatever</ul>

            <Card className="text-black">
                <Card.Body>
                    <Card.Title>Approval Form</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, quam vel condimentum viverra, risus urna commodo mi, vel auctor urna quam eu odio.
                    </Card.Text>
                    <Button variant="success" className="me-2">Accept</Button>
                    <Button variant="danger" className="me-2">Decline</Button>
                    <Button variant="info">View More</Button>
                </Card.Body>
            </Card>
        </Container>

    );
}

export default Departments;