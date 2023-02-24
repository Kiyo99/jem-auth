import { useEffect, useState } from "react";
import { Button, Col, Row, Card, Container } from "react-bootstrap";
import AppNavBar from "../../components/AppNavBar";

function WorkStudy() {


    const [students, setStudents] = useState<any[]>([]);

    const getStudents = async () => {
        try {

            const res = await fetch('http://localhost:3001/api/work_study/applicants')
            const student = await res.json();
            setStudents(student);

        } catch (error) {
            console.log(`Error: ${error}`);
        }
    }


    useEffect(() => {
        getStudents();
        console.log(`Students: ${students}`);
    }, []);


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
                <Row className="p-3">
                    {
                        students.map(student => <>
                            <Card style={{ width: '18rem', color: 'black', margin: '10px' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>{student.ID}</Card.Title>
                                    <Card.Text>
                                        {student.Applicant} applied for {student.Position}
                                    </Card.Text>
                                    <Button variant="success" className="me-3">Approve</Button>

                                    <Button variant="danger">Decline</Button>
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

            <Col className="col-lg-4 col-md-6 p-3">
                <Row>
                    {
                        students.map(student => <>
                            <Card style={{ width: '18rem', color: 'black' }}>
                                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                                <Card.Body>
                                    <Card.Title>{student.ID}</Card.Title>
                                    <Card.Text>
                                        {student.Applicant} applied for {student.Position}
                                    </Card.Text>
                                    <Button variant="success">Approve</Button>

                                    <Button variant="danger">Decline</Button>
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
            </Col>


            {
                students.map(student => <>
                    <Card style={{ width: '18rem', color: 'black' }}>
                        {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                        <Card.Body>
                            <Card.Title>{student.ID}</Card.Title>
                            <Card.Text>
                                {student.Applicant} applied for {student.Position}
                            </Card.Text>
                            <Button variant="success">Approve</Button>

                            <Button variant="danger">Decline</Button>
                        </Card.Body>
                    </Card>
                    {/* <h3 className="text-white">{student.Applicant}</h3>
                    <h5 className="text-white">{student.ID}</h5>
                    <h5 className="text-white">{student.Position}</h5> */}
                    <br />
                </>
                )
            }

        </Container>

    );
}

export default WorkStudy;