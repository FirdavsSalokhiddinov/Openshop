import '../App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, NavDropdown, Row, Col, Button, DropdownDivider, Carousel, Image } from 'react-bootstrap';
import carousel1 from '../assets/Carousel1.svg';
import carousel2 from '../assets/Carousel2.svg';
import carousel3 from '../assets/Carousel3.svg';
import product1 from '../assets/product-1.png';
import product2 from '../assets/product-2.png';
import product3 from '../assets/product-3.png';
import product4 from '../assets/product-4.png';
import phone1 from '../assets/iphone/iphone1.png';
import phone2 from '../assets/iphone/iphone2.png';
import phone3 from '../assets/iphone/iphone3.png';
import phone4 from '../assets/iphone/iphone4.png';
import laptop1 from '../assets/laptop/laptop1.png';
import laptop2 from '../assets/laptop/laptop2.png';
import laptop3 from '../assets/laptop/laptop3.png';
import laptop4 from '../assets/laptop/laptop4.png';
import top1 from '../assets/top/top1.png';
import top2 from '../assets/top/top2.png';
import top3 from '../assets/top/top3.png';
import top4 from '../assets/top/top4.png';
import ps from '../assets/playstationimg.svg';


const HomePage = () => {
    return (
        <div className="Home">
            <Nav className='justify-content-center'>
                <div className='d-flex align-items-center'>
                <NavDropdown id="nav-dropdown-dark-example" title="Cell Phones & Tablets">
                    <div className="d-flex justify-content-between navdropdown" id="navdropdown" style={{ width: '100%' }}>
                    <div>
                        <NavDropdown.Item href="#action/3.3">Cell Phones</NavDropdown.Item>
                        <DropdownDivider/>
                        <NavDropdown.Item href="#action/3.4">Xiaomi</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Apple</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Samsung</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Huawei</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">BQ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Nokia</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Inoi</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Vivo</NavDropdown.Item>
                    </div>
                    <div className="ms-auto"> {/* 'ms-auto' pushes this div to the right */}
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <DropdownDivider/>
                        <NavDropdown.Item href="#action/3.2">Xiami</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Apple</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Samsung</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Huawei</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">BQ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">More...</NavDropdown.Item>
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

            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                <img className="d-block w-100" src={carousel1} alt="First slide"/>
                <Carousel.Caption>
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={carousel2} alt="Second slide"/>
                <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img className="d-block w-100" src={carousel3} alt="Third slide"/>
                <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur </p>
                </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
            <Container className="new-product my-4">
                <Row>
                {/* Large Product on the Left */}
                <Col md={6} className="big-product">
                    <div className="product">
                    <div className="product__img">
                        <img src={product1} alt="Suunto SS050143000" />
                    </div>
                    <div className="product__content">
                        <h4>Suunto SS050143000</h4>
                        <p>70$</p>
                        <div className="product__content--sale">-57%</div>
                    </div>
                    </div>
                </Col>
                
                {/* Right Side Products */}
                <Col md={6} className="right-products">
                    {/* Product 2: Long image at the top */}
                    <div className="product longer-product">
                    <div className="product__img">
                        <img src={product2} alt="Airpods 2.1" />
                    </div>
                    <div className="product__content">
                        <h4>Airpods 2.1</h4>
                        <p>95$</p>
                        <div className="product__content--sale">-30%</div>
                    </div>
                    </div>

                    {/* Products 3 and 4 side by side below Product 2 */}
                    <div className="small-products">
                    <div className="product product-item">
                        <div className="product__img">
                        <img src={product3} alt="Xiaomi Mi Power Bank 2s 10000" />
                        </div>
                        <div className="product__content">
                        <h4>Xiaomi Mi Power Bank 2s 10000</h4>
                        <p>9$</p>
                        <div className="product__content--sale">-20%</div>
                        </div>
                    </div>
                    <div className="product product-item">
                        <div className="product__img">
                        <img src={product4} alt="Remax RP-W1 White" />
                        </div>
                        <div className="product__content">
                        <h4>Remax RP-W1 White</h4>
                        <p>11$</p>
                        <div className="product__content--sale">-10%</div>
                        </div>
                    </div>
                    </div>
                </Col>
                </Row>
                <div className="text-center mt-4">
                <Button variant="dark" className="learn-more-btn">Learn more</Button>
                </div>
            </Container>

            <section className="goods container my-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
                    Cell Phone
                </h3>
                </div>
                <div className="goods__list">
                <Row className="justify-content-center">
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={phone1} alt="IPhone 12 Pro Max 128GB (Gray)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>IPhone 12 Pro Max 128GB (Gray)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>1300$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={phone2} alt="IPhone 11 Pro 128GB (Yellow)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>IPhone 11 Pro 128GB (Yellow)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>700$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={phone3} alt="IPhone 12 Pro 256 GB (Blue)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>IPhone 12 Pro 256 GB (Blue)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>1500$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={phone4} alt="IPhone 11 Pro 256 GB (Red)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>IPhone 11 Pro 256 GB (Red)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>850$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                </Row>
                </div>
                <div className="text-center mt-4">
                <Button variant="dark" className="learn-more-btn">Learn more</Button>
                </div>
            </section>

            <section className="goods container my-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
                    Computers & Laptop
                </h3>
                </div>
                <div className="goods__list">
                <Row className="justify-content-center">
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={laptop1} alt="IPhone 12 Pro Max 128GB (Gray)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Lenovo IdeaPad L3 15IML05</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>1350$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={laptop2} alt="IPhone 11 Pro 128GB (Yellow)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Dream Machines G1650Ti-15UA65</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>1430$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={laptop3} alt="IPhone 12 Pro 256 GB (Blue)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Apple MacBook Air 13" 2020</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>1723$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={laptop4} alt="IPhone 11 Pro 256 GB (Red)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Dream Machines 15UA51</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>1200$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                </Row>
                </div>
                <div className="text-center mt-4">
                <Button variant="dark" className="learn-more-btn">Learn more</Button>
                </div>
            </section>

            <div className="text-center">
                <Image src={ps} fluid />
            </div>

            <section className="goods container my-4">
                <div className="d-flex justify-content-between align-items-center mb-4">
                <h3 className="title text-left mb-0" style={{ fontSize: '1.5rem', color: '#666' }}>
                    Top seller
                </h3>
                </div>
                <div className="goods__list">
                <Row className="justify-content-center">
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={top1} alt="IPhone 12 Pro Max 128GB (Gray)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Smart Watch W34 | ZM (White)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>29$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={top2} alt="IPhone 11 Pro 128GB (Yellow)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>AirPods 2.1</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>135$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={top3} alt="IPhone 12 Pro 256 GB (Blue)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Smart Watch W34 | ZM (Black)</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>29$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                    <Col md={3} className="mb-4 text-center">
                    <article className="goods-card">
                        <div className="goods-card__img">
                        <img src={top4} alt="IPhone 11 Pro 256 GB (Red)" />
                        </div>
                        <a className="goods-card__fav icon-heart" href="#!"> </a>
                        <div className="goods-card__content">
                        <h4 style={{ fontSize: '1rem', color: '#555' }}>Coffee machine VITEK VT-1526</h4>
                        <p style={{ fontSize: '0.9rem', color: '#777' }}>78$</p>
                        </div>
                        <a className="goods-card__btn" href="productDetail.html">
                        <Button variant="dark" className="w-100">Buy</Button>
                        </a>
                    </article>
                    </Col>
                </Row>
                </div>
                <div className="text-center mt-4">
                <Button variant="dark" className="learn-more-btn">Learn more</Button>
                </div>
            </section>
        </div>
    );
}

export default HomePage;