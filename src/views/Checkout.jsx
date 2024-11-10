import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Row, Col, Button} from 'react-bootstrap';

const CheckoutPage = () => {
    return (
        <div className="CheckoutPage" style={{ width: '800px', float: 'center',margin: '50px auto 100px auto'}}>
            <Form style={{ 
                width: '500px', 
                float: 'center', 
                margin: '0 auto 0 auto',
                padding: '50px 50px 50px 50px',
                background: '#FCFCFC',
                borderRadius: '5%'
                }}>
                <h3 style={{textAlign:'center', marginBottom: '20px'}}>Address Confirmation</h3>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" style={{width: '150px', height: '40px'}}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default CheckoutPage;