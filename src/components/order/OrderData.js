import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const OrderData = ({data}) => {

    return <>
        <div className="cart">
            <Container>
                <h1>Mis ordenes</h1>
                <hr/>
                <div className="container-order">
                    <div>
                        <p className="p-resume">Resumen de compra</p>
                        <p className="n-order">Número de orden: {data.id}</p>
                        
                        {data.items.map((item) => 
                            <div className="detail-shop" key={item.id}>
                                <p className="p-compra">{item.title} ( x {item.quantity} )</p>
                                <p className="p-compra">${item.price}</p>
                            </div>
                        )}
                        <div className="total">
                            <p className="p-compra">total:</p>
                            <p className="p-compra">${data.total}</p>
                        </div>
                        <div className="btn-order">
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
                                finalizar
                            </Button>
                        </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </>

}

export default OrderData;