import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartWidget from "./cart/icon/CartWidget";
import { Link } from 'react-router-dom';
import { useCartContext } from "../context/CartContext";

function NavBar () {
    
    const { itemsOnCart } = useCartContext();
    
    return <>
        <Navbar expand="lg" fixed="top" >
            <Container>
                <Link className="a-brand" to='/'>
                    <Navbar.Brand>Valkiria</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <MenuIcon 
                        style={{
                            color: "#00dbafda",
                            fontSize: "2em"
                        }}
                    />
                </Navbar.Toggle>
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                    <Nav>
                        <NavDropdown title="Categorías" id="basic-nav-dropdown">
                            <NavDropdown.Item>
                                <Link className="a" to='/categoria/auriculares'>
                                    Auriculares
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="a" to='/categoria/mouses'>
                                    Mouses
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="a" to='/categoria/teclados'>
                                    Teclados
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="a" to='/categoria/camara'>
                                    Webcams
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="a" to='/categoria/audio'>
                                    Audio
                                </Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="a" to='/categoria/accesorios'>
                                    Accesorios
                                </Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link>
                            <Link className='a-cart' to='/orders'>
                                Ordenes
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link className="a-cart" to='/cart'>
                                <Badge badgeContent={itemsOnCart} color="secondary">
                                    <CartWidget />
                                </Badge>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;