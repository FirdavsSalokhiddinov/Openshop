import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button } from 'react-bootstrap';
import google from '../assets/google.svg';

const Login = () => {
    return(
        <div className="Login" style={{ width: '100%', float: 'center',display:"flex",justifyContent:"center",alignItems:"center", background:'#fcfcfc'}}>
            <Form style={{ 
                width: '500px', 
                float: 'center', 
                margin: '50px auto 50px auto',
                padding: '50px 50px 50px 50px',
                background: '#ffffff',
                borderRadius: '5%'
                }}>
                <h3 style={{textAlign:'center', paddingBottom: '80px'}}>Login</h3>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    {/* <Form.Label>Address</Form.Label> */}
                    <Form.Control style={{
                        border:"none",
                        borderBottom:"2px solid #ccc",
                        borderRadius:"0px",
                        placeholder:"#ccc"
                    }} placeholder="Email address or phone number" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    {/* <Form.Label>Address</Form.Label> */}
                    <Form.Control style={{
                        border:"none",
                        borderBottom:"2px solid #ccc",
                        borderRadius:"0px",
                    }} placeholder="Password" />
                </Form.Group>


                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Remember ID" style={{}} />
                </Form.Group>

                <Button variant="primary" type="" href="/" style={{width: '100%', height: '45px', borderRadius:"25px", background:"#1E90FF"}}>
                    Log in
                </Button>

                <a href="/register" style={{paddingTop:"70px", color:"#636363"}}><p style={{paddingTop:"70px"}}>Create an account</p></a>

                <Button variant="light" href="https://google.com" type="" style={{width: '100%', height: '44px',margin:"0", padding:'0',display:"flex",alignItems:"center", justifyContent:"space-evenly", borderRadius:"25px"}}>
                    <img src={google} style={{paddingLeft:""}}/>
                    <p style={{margin:"0", color:"#000", display:"flex", justifyContent:"center"}}>Sign in with your Google Account</p>
                    
                </Button>

            </Form>
        </div>
    );
}

export default Login;