import { useEffect, useState } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";
import AppForm from "../../components/AppForm";
import AppNavBar from "../../components/AppNavBar";

function Hostel() {

    const [topic, setTopic] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");

    const [showLoading, setShowLoading] = useState(false);
    const [show, setShow] = useState(false);


    const SubmitNews = async (e: any) => {
        e.preventDefault();
        setShowLoading(true);
        setShow(false);

        try {
            const res = await fetch('http://localhost:3001/api/news',
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(
                        {
                            topic: topic,
                            subtitle: subtitle,
                            content: content,
                        }
                    )
                }
            );

            const news = await res.json();
            setShowLoading(false);
            alert(JSON.stringify(news));
        }
        catch (error) {
            setShowLoading(false);
            alert(error);
        }

    }

    return (
        <Container fluid className="p-3 text-white">

            <Modal
                show={show}
                onHide={() => setShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Post news?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Are you sure you want to post this news?
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-secondary" onClick={() => setShow(false)}>
                        Cancel
                    </Button>
                    <Button variant="success" onClick={(e) => SubmitNews(e)}>
                        Post
                    </Button>
                </Modal.Footer>
            </Modal>

            <AppNavBar origin="theo" />
            <h1>Hostel</h1>
            <h2>Features</h2>
            <ul>Post annoucements</ul>
            <ul>View complaints and assign them to dean</ul>
            <ul>View all students per hostel</ul>
            <ul>Search students within jurisdiction and see details</ul>


            <Form className="d-flex flex-column align-items-center">
                <AppForm
                    Autofocus
                    LabelName="Title"
                    placeHolder="title"
                    OnChange={e => { setTopic(e.target.value) }}
                    type="text"
                />
                <AppForm
                    LabelName="Sub title"
                    placeHolder="Subtitle"
                    OnChange={e => { setSubtitle(e.target.value) }}
                    type="text"
                />
                <AppForm
                    LabelName="Content"
                    placeHolder="content"
                    OnChange={e => { setContent(e.target.value) }}
                    type="text"
                />
                <div className="d-grid gap-2">
                    <Button onClick={() => setShow(true)} type="button" className="rounded-3 btn-lg text-white btn-success">{
                        showLoading ? (<>...</>) : (<>Submit</>)
                    }</Button>
                </div>
            </Form>
        </Container>

    );
}

export default Hostel;