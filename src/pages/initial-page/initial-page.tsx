import AppNavBar from "../../components/AppNavBar";
import { Container, Form, FormCheck, Row, Button } from "react-bootstrap";
import AppForm from "../../components/AppForm";
import { useState } from "react";
import "./initial-page.css"

function InitialPage() {

    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const registerUser = async (e: any) => {
        e.preventDefault();

        if (password != confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const res = await fetch('http://localhost:3000/api/register',
                {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(
                        {
                            fName: fullName,
                            phoneNumber: phoneNumber,
                            email: email,
                            password: password
                        }
                    )
                }
            );

            const user = await res.json();
            alert(user);
        }
        catch (error) {
            alert(error);
        }

    }

    return (
        <div>
            <AppNavBar />
            <Container fluid className="bg-dark p-4">
                <h1 className="text-white text-center fw-bold">Sign Up</h1>
                <p className="text-white text-center">Kindly provide us with your information so that you can have access
                    to all the amazing experience we have to offer.
                </p>
                <Form onSubmit={(e) => registerUser(e)} className="p-3 d-flex flex-column align-items-center">
                    <AppForm
                        Autofocus
                        LabelName="Full Name"
                        placeHolder="Full Name"
                        OnChange={e => { setFullName(e.target.value) }}
                        type="text"
                    />
                    <AppForm
                        LabelName="Phone Number"
                        placeHolder="Phone Number"
                        OnChange={e => { setPhoneNumber(e.target.value) }}
                        type="number"
                    />
                    <AppForm
                        LabelName="Email"
                        placeHolder="Email"
                        OnChange={e => { setEmail(e.target.value) }}
                        type="email"
                    />
                    <AppForm
                        LabelName="Password"
                        placeHolder="Password"
                        OnChange={e => { setPassword(e.target.value) }}
                        type="password"
                    />
                    <AppForm
                        LabelName="Confirm Password"
                        placeHolder="Confirm Passwprd"
                        OnChange={e => { setConfirmPassword(e.target.value) }}
                        type="password"
                    />
                    <FormCheck label={<p className="text-white">By creating an account, you agree to the <a href="">terms of use </a>
                        and our <a href="">privacy policy</a></p>} />
                    <div className="d-grid gap-2">
                        <Button type="submit" className="rounded-3 btn-lg text-white btn-success">Sign up</Button>
                        <p className="text-white">Already have an account? <a href="">Sign in </a>
                        </p>
                    </div>
                </Form>
            </Container>
        </div>
    );
}


export default InitialPage;