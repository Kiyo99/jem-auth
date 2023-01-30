import React, { ChangeEventHandler } from "react";
import { Form, Row, Col } from 'react-bootstrap';

type FormProps = {
    LabelName: string;
    OnChange(e: React.ChangeEvent<any>): void;
    type: string;
    placeHolder?: string;
    Autofocus?: boolean
}

function AppForm(props: FormProps) {
    return (
        <>
            <Form.Group as={Col} lg="6" >
                <Form.Label>{props.LabelName}</Form.Label>
                <Form.Control className="mobile-form" autoFocus={props.Autofocus} onChange={e => props.OnChange(e)} type={props.type} placeholder={props.placeHolder} required />
            </Form.Group>
            <br />
        </>
    );
}

export default AppForm;