import { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import AppNavBar from "../../components/AppNavBar";

function Dashboard() {

    return (
        <Container fluid className="p-3 text-white">
            <AppNavBar origin="theo" />
            <h1>Home</h1>
        </Container>

    );
}

export default Dashboard;