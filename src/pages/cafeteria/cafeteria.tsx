import { Container } from "react-bootstrap";
import AppNavBar from "../../components/AppNavBar";

function Cafeteria() {

    return (
        <Container fluid className="p-3 text-white">
            <AppNavBar origin="theo" />
            <h1 className="text-center">Cafeteria</h1>
            <h2>Features</h2>
            <ul>News for food menu</ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
            <ul></ul>
        </Container>

    );
}

export default Cafeteria;

//Add