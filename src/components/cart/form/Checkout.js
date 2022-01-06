import { Container, Modal } from "react-bootstrap";
import firebase from "firebase";
import 'firebase/firestore';
import { dataBase } from "../../../firebase/firebase";
import { useCartContext } from "../../../context/CartContext";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loader from '../../Loader';
import { ErrorMessage, Formulario, ContainerButton } from "./stylesForm/StyleForm";
import { Button } from "@mui/material";
import Input from './Input';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


const Checkout = () => {

    const [loader, setLoader] = useState(true);

    const [orderId, setOrderId] = useState('');

    const {cart, total, emptyCart} = useCartContext();

    const [show, setShow] = useState(false);

    const [name, updateName] = useState({field: '', validate: null});
    const [phone, updatePhone] = useState({field: '', validate: null});
    const [email, updateEmail] = useState({field: '', validate: null});
    const [confirmEmail, updateConfirmEmail] = useState({field: '', validate: null});
    const [formValid, updateFormValid] = useState(null);


    useEffect(() => {

        setLoader(true); 

        setTimeout(() => {

            setLoader(false);

        }, 2000);

    }, []);

    const expressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        phone: /^\d{7,14}$/
    }

    const validateEmail = () => {
        if(email.field.length > 0){
            if(email.field !== confirmEmail.field){
                updateConfirmEmail((prevState) => {
                    return {...prevState, validate: 'false'}
                });
            }else {
                updateConfirmEmail((prevState) => {
                    return {...prevState, validate: 'true'}
                });
            }
        }
    }

    const close = () => setShow(false);

    const generateOrder = (e) => {
        e.preventDefault()

        if(
            name.validate === 'true' &&
            phone.validate === 'true' &&
            email.validate === 'true' &&
            confirmEmail.validate === 'true' 

        ){
            updateFormValid(true);
            updateName({field: '', validate: null});
            updatePhone({field: '', validate: null});
            updateEmail({field: '', validate: null});
            updateConfirmEmail({field: '', validate: null});
            setShow(true);

        } else {
            updateFormValid(false);
        }
        
        if(cart !== 0 ){

            const order = {
        
                date: firebase.firestore.Timestamp.fromDate(new Date()),
                buyer: {
                    name: name, 
                    email: email,
                    phone: phone
                },
                total: total,
                items: cart.map(item => {
                    return{
                        id: item.item.id,
                        title: item.item.title,
                        quantity: item.quantity,
                        price: item.item.price
                    }
        
                }),
        
            }
        
            const db = dataBase;
        
            db.collection('orders').add(order)
            .then(response => successOrder(response))
            .finally();
        }
        
        const successOrder = (response) => {
            setOrderId(response.id);
        }

    }

    const clean = () => {
        Array.from(document.querySelectorAll("input")).forEach(
          input => (input.value = "")
        );
        setShow(false);
        emptyCart();
      };

    return loader ? (
        <Loader />
    )
    :
    (
        <div className="cart">
            <Container>
                <h1>Datos personales</h1>
                <p className="p-order">*por favor complete todos los campos para finalizar su compra</p>
                <Formulario action="">
                    <Input 
                        state={name}
                        updateState={updateName}
                        type="text"
                        label="Nombre"
                        placeholder="Iara"
                        name="nombre"
                        errorLegend="El nombre solo puede contener letras y espacios."
                        regularExpression={expressions.name}

                    />
                    <Input 
                        state={phone}
                        updateState={updatePhone}
                        type="text"
                        label="Teléfono"
                        placeholder="11 1111 1111"
                        name="telefono"
                        errorLegend="El teléfono solo puede contener numeros y el maximo son 14 dígitos."
                        regularExpression={expressions.phone}
  
                    />
                    <Input 
                        state={email}
                        updateState={updateEmail}
                        type="email"
                        label="Email"
                        placeholder="angus@mail.com"
                        name="email"
                        errorLegend="El email solo puede contener letras, numeros, puntos, guiones y guion bajo."
                        regularExpression={expressions.email}
        
                    />
                    <Input 
                        state={confirmEmail}
                        updateState={updateConfirmEmail}
                        type="email"
                        label="Repetir Email"
                        placeholder="angus@mail.com"
                        name="email"
                        errorLegend="El email debe coincidir."
                        funcion={validateEmail}
                    />

                    {formValid === false && <ErrorMessage>
                        <p>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                            <b>error:</b> por favor rellena el formulario correctamente.
                        </p>
                        </ErrorMessage>} 
                        <ContainerButton>
                            <Button variant="contained" onClick={generateOrder}
                                style={{
                                    backgroundColor: "#00dbafda",
                                    color: "#361d64", 
                                    fontWeight: "600",
                                    letterSpacing: "1px",
                                    hover: "#00dbafda", 
                                    width: "30rem",
                                    height: "3rem",
                                }}>
                                continuar
                            </Button>
                        </ContainerButton>
                </Formulario>
                <Modal show={show} onHide={close} centered>
                    <Modal.Header closeButton>
                    <Modal.Title>Detalle de pedido</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {orderId !== '' && <p>N° de orden: {orderId}</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="container-modal">
                        <p>Se le enviara un mail con el detalle de su pedido</p>
                        <Link className="a" to={`/orders/${orderId}`}>
                            <Button onClick={clean}
                            style={{
                                backgroundColor: "#361d64",
                                color: "#00dbafda", 
                                fontWeight: "600",
                                letterSpacing: "1px",
                                hover: "#00dbafda", 
                                width: "20rem",
                                height: "3rem", 
                                marginBottom: "1rem"
                            }}
                            >
                                entendido
                            </Button>
                        </Link>
                        </div>
                    </Modal.Footer>
                </Modal>
            </Container>
        </div>
    )
}

export default Checkout;