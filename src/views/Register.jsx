import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from 'react-bootstrap';
import google from '../assets/google.svg';


const Register = () => {
    return(
        <div className="Register" style={{ width: '100%', float: 'center',display:"flex",justifyContent:"center",alignItems:"center", background:'#fcfcfc'}}>
            <Form style={{ 
                width: '500px', 
                float: 'center', 
                margin: '50px auto 50px auto',
                padding: '50px 50px 50px 50px',
                background: '#ffffff',
                borderRadius: '5%'
                }}>
                <h3 style={{textAlign:'center', paddingBottom: '80px'}}>Create an account</h3>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                    {/* <Form.Label>Address</Form.Label> */}
                    <Form.Control style={{
                        border:"none",
                        borderBottom:"2px solid #ccc",
                        borderRadius:"0px",
                        placeholder:"#ccc"
                    }} placeholder="Full Name" />

                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    {/* <Form.Label>Address</Form.Label> */}
                    <Form.Control style={{
                        border:"none",
                        borderBottom:"2px solid #ccc",
                        borderRadius:"0px",
                    }} placeholder="Re-enter password" />
                </Form.Group>


                

                <Button variant="primary" type="submit" style={{width: '100%', height: '45px', borderRadius:"25px", background:"#1E90FF", marginTop:"20px"}}>
                    Log in
                </Button>

                <a href="#" style={{ color:"#636363", display:"flex",justifyContent:"center",}}><p style={{paddingTop:"40px", fontSize:"16px",fontWeight:"bold", }}>Already have an account?</p></a>

                <Button variant="primary" type="submit" style={{width: '100%', height: '44px',marginTop:"15px", padding:'0',display:"flex",alignItems:"center", justifyContent:"space-evenly", borderRadius:"25px", background:"#e5e5e5"}}>
                    <img src={google} style={{paddingLeft:""}} alt=""/>
                    <p style={{margin:"0", color:"#000", display:"flex", justifyContent:"center"}}>Sign in with your Google Account</p>
                    
                </Button>

            </Form>
        </div>
    );
}

export default Register;