import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function RealEstate() {
    return (
        <Form>
            <Row className="mb-3">
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Serial Number</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>List Year</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>Date Recorded</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>Town</Form.Label>

                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Address</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Make</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Assessed Value</Form.Label>
                    <Form.Control />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Sale Amount</Form.Label>
                    <Form.Control />


                </Form.Group>
            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Property Type</Form.Label>
                    <Form.Control />

                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Residential Type</Form.Label>
                    <Form.Control />

                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Assesor Remarks</Form.Label>
                    <Form.Control />

                </Form.Group>
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>OPM Remarks</Form.Label>
                    <Form.Control />

                </Form.Group>

            </Row>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Location</Form.Label>
                    <Form.Control />

                </Form.Group>


            </Row>



            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default RealEstate;