import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Nav, NavDropdown, DropdownDivider } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import shoppingcart from '../assets/shoppingcart.svg';
import visa from '../assets/visa.svg';
import mcard from '../assets/mcard.svg';

const EmptyCart = () => {
    return(
        <div className="EmptyCart">
            <Nav className='justify-content-center'>
                <div className='d-flex align-items-center'>
                <NavDropdown id="nav-dropdown-dark-example" title="Cell Phones & Tablets">
                    <div className="d-flex justify-content-between navdropdown" id="navdropdown" style={{ width: '100%' }}>
                    <div>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Cell Phones</NavDropdown.Item>
                        <DropdownDivider/>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Xiaomi</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Apple</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Samsung</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Huawei</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>BQ</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Nokia</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Inoi</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Vivo</NavDropdown.Item>
                    </div>
                    <div className="ms-auto"> {/* 'ms-auto' pushes this div to the right */}
                        <NavDropdown.Item href="/productcategory" style={{textDecoration:'none', color:'#333'}}>Action</NavDropdown.Item>
                        <DropdownDivider/>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Xiami</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Apple</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Samsung</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>Huawei</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>BQ</NavDropdown.Item>
                        <NavDropdown.Item href="/productcategory"  style={{textDecoration:'none', color:'#333'}}>More...</NavDropdown.Item>
                    </div>
                    </div>
                </NavDropdown>

                <NavDropdown id="nav-dropdown-dark-example" title="Computers & Laptop">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="nav-dropdown-dark-example" title="TV & Video">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="nav-dropdown-dark-example" title="Accessories">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="nav-dropdown-dark-example" title="Home Appliance">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                <NavDropdown id="nav-dropdown-dark-example" title="Video Games & Consoles">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                </NavDropdown>
                </div>
            </Nav>

            <div className="PageContent" style={{display:'flex',width: '100%',justifyContent:"center",alignItems:"center",}}>
                <div className="cartContainer1" style={{
                    margin:"5% 200px 0% 200px",
                    width:"100%",
                    height:"100%",
                    display: 'block',
                    justifyContent: 'center',
                    alignItems:"center",
                    // border:"1px, solid red"
                }}>
                        <div className="cart" style={{
                            width:'100%',
                            display:'flex',
                            // justifyContent:'start',
                            alignItems:'center',
                            padding: '0 0 0 25%',
                            borderBottom:'1px solid #dadada'
                        }}>
                            <p><img src={shoppingcart} style={{
                                color:'black',
                                paddingRight:'5px',
                            }}/></p>
                            <p>Cart</p>
                        </div>
                        
                        <div className="cartEmpty" style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',}}>
                            <div className="cartEmptyText" style={{
                                    
                        }}>
                                <h4 style={{padding:'45px 0 15px 50px'}}>Your cart is empty</h4>
                                <p>Sign in to get notified for new off-sales</p>
                                <div className="shop" style={{
                                    display:'grid',
                                    justifyContent:'center',
                                    alignItems:'center',
                                    paddingTop:'50px'
                                }}>
                                    <Button variant="primary" href="/login" type="submit" style={{width: '180px', height: '45px', borderRadius:"25px", background:"#1E90FF"}}>
                                        Sign in
                                    </Button>
                                    <a href="/" style={{textDecoration:'none'}}><p style={{
                                        padding:'5px 0 0 20px'
                                    }}>Continue Shopping</p></a>
                                </div>
                            </div>
                        
                        </div>
                        

                    <div className="cartContainer2" style={{
                        width:'100%',
                        display:'flex',
                        alignItems:'center',
                        justifyContent:'center',
                        padding:'200px 0 50px 0'
                    }}>
                        <div className="SupPayment">
                            <div className="text">
                                <p>Supported method types</p>
                            </div>
                            <div className="payment" style={{
                                display:'flex',
                                justifyContent:'space-evenly',
                                alignItems:'center'
                            }}>
                                <img src={visa} alt="" />
                                <img src={mcard} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        </div>
    )
}




export default EmptyCart;