import React from 'react'
import './AttrValue.scss'
import { Form } from 'react-bootstrap';
const AttrValue = () => {
    return (
        <div className="valueArea" >
            <p className="margin0">Value</p>
            <Form.Group controlId="formGridState" className="margin0">
                <Form.Control as="select" defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                </Form.Control>
            </Form.Group>
        </div>
    );
}

export default AttrValue
