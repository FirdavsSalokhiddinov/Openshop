import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const OrderConfirmationPage = () => {
    return (
        <div className="CheckoutPage" style={{ 
            width: '800px', 
            float: 'center',
            margin: '50px auto 100px auto'}}>
            <div style={{
                width: '500px', 
                float: 'center',
                margin: '50px auto 230px auto'
            }}>
                <div className="header" style={{margin: '100px 0 25px 0', fontSize: '2rem', color: 'limegreen', fontWeight: 'bolder'}} >
                    <span style={{}}>Order Confirmed</span>
                    <Icon.PatchCheck style={{}}/>
                </div>

                <div className="main">
                    <p>Order number: 121215451518</p>
                    <hr />
                    <p>Will be Delivered in 5 business days!</p>
                </div>

                <Button variant="light">Continue Shopping 🔍</Button>
            </div>
        </div>
    );
}

export default OrderConfirmationPage;