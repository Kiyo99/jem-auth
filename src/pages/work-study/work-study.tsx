import { useEffect, useState } from "react";
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import AppNavBar from "../../components/AppNavBar";

function WorkStudy() {


    const [students, setStudents] = useState<any[]>([]);

    useEffect(() => {
        const getStudents = async () => {
            try {

                const res = await fetch('http://localhost:3001/api/work_study/applicants')
                const student = await res.json();
                setStudents(student);
                console.log(`Stttt: ${students}`);


            } catch (error) {
                console.log(`Error: ${error}`);
            }
        }
        getStudents();
        console.log(`Students: ${students}`);
    }, [students]);


    return (
        <Container fluid className="p-3 text-white">
            <AppNavBar origin="theo" />
            {/* <h1>Work Study</h1>
            <h2>Features</h2>
            <ul>Post annoucements and job openings</ul>
            <ul>View applications</ul>
            <ul>View all students</ul>
            <ul>Search students within jurisdiction and see details like gpa</ul> */}

            <Container fluid className="p-1">

                <div>
                    {students.length === 0 ?
                        <></> :
                        <h1>Applicants</h1>
                    }
                </div>

                <Row className="p-3">
                    {
                        students.map(student => <>
                            <Card style={{ width: '18rem', color: 'white', margin: '10px', backgroundColor: 'grey' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>{student.ID}</Card.Title>
                                    <Card.Text>
                                        {student.Applicant} applied for {student.Position}
                                    </Card.Text>
                                    <Button variant="success" className="me-3">Approve</Button>

                                    <Button variant="danger" className="">Decline</Button>
                                    {/* <Button variant="info">View more</Button> */}

                                </Card.Body>
                            </Card>
                            {/* <h3 className="text-white">{student.Applicant}</h3>
                    <h5 className="text-white">{student.ID}</h5>
                    <h5 className="text-white">{student.Position}</h5> */}
                            <br />
                        </>
                        )
                    }
                </Row>
            </Container>

        </Container>

    );
}

export default WorkStudy;