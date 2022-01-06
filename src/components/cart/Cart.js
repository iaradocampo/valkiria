import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import Checkout from "./form/Checkout";
import CartDetail from "./CartDetail";
import { Button } from "@mui/material";

function Cart () {

    const { cart, emptyCart, total } = useCartContext();

    const [loader, setLoader] = useState(true);

    const [finishShop, setFinishShop] = useState(false);

    useEffect(() => {

        setLoader(true); 

        setTimeout(() => {

            setLoader(false);

        }, 2000);

    }, []);

    const shopping = () => {
        setFinishShop(true);
    }
    
    return loader ? (
        <Loader />
    )
    : 
    (
        (finishShop ?
            <Checkout />
        : 
            <div className="cart">
                <Container>
                    <h1>Mi carrito</h1>
                    <hr />
                    {cart.length === 0 && 
                        <div>
                            <p className="p-empty">Su carrito esta vacío</p>
                            <p className="p-order">Para seguir navegando, navegar por las categorias del sitio, o busque su producto.</p>
                            <Link className="a" to='/'>
                                <Button variant="contained" 
                                    style={{
                                        backgroundColor: "#00dbafda",
                                        color: "#361d64", 
                                        fontWeight: "600",
                                        letterSpacing: "1px",
                                        hover: "#00dbafda", 
                                        width: "20rem",
                                        height: "3rem",
                                        marginTop: "2rem"
                                    }}>
                                    elegir productos
                                </Button>
                            </Link>
                        </div>
                    }
                    <Row>
                        <CartDetail />
                        <Col sm={12} md={12} lg={4}>
                            {cart.length !== 0 && (
                                <div className="container-tot">
                                    <div className="total">
                                        <p className="p-total">total:</p> 
                                        <p className="p-total">${total.toFixed(2)}</p>
                                    </div>
                                    <div className="container-btn">
                                        <Button onClick={shopping} variant="contained" 
                                            style={{
                                                backgroundColor: "#00dbafda",
                                                color: "#361d64", 
                                                fontWeight: "600",
                                                letterSpacing: "1px",
                                                hover: "#00dbafda", 
                                                width: "20rem",
                                                height: "3rem", 
                                                marginBottom: "1rem"
                                            }}>
                                            finalizar compra
                                        </Button>
                                        <Link className="a" to='/'>
                                            <Button variant="outlined" 
                                                style={{
                                                    color: "#00dbafda", 
                                                    fontWeight: "600",
                                                    letterSpacing: "1px",
                                                    border: "1px solid #00dbafda", 
                                                    '&:hover':{
                                                        backgroundColor: "rgba(6, 190, 161, 0.04)"
                                                    },
                                                    width: "20rem",
                                                    height: "3rem", 
                                                }}>
                                                continuar comprando
                                            </Button>
                                        </Link>
                                    </div>
                                    <div className="container-btn">
                                        <Button onClick={ () => emptyCart()} variant="contained" 
                                            style={{
                                                backgroundColor: "#00dbafda",
                                                color: "#361d64", 
                                                fontWeight: "600",
                                                letterSpacing: "1px",
                                                hover: "#00dbafda", 
                                                width: "30rem",
                                                height: "3rem",
                                                marginTop: "2rem"
                                            }}>
                                            vaciar carrito
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    )
}

export default Cart;