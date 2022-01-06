import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ItemCount from './ItemCount';
import { useCartContext } from '../context/CartContext';
import Loader from './Loader';

const ItemDetail = ({item}) =>{

    const { addItem } = useCartContext();

    const [loader, setLoader] = useState(true);

    useEffect(() => {

        setLoader(true); 

        setTimeout(() => {

            setLoader(false);

        }, 2000);

    }, []);
    
    const onAdd = (cant) =>{

        const add = {
            item : item, 
            quantity : cant
        }
    
        addItem(add);
    }

    return loader ? (
        <Loader />
    )
    : 
    (
        <Container>
            <div className="detail">
                <Row>
                    <Col sm={12} md={6} lg={6}>
                        <img className="img-detail" src={item.image} alt="producto" />
                    </Col>
                    <Col sm={12} md={6} lg={6}>       
                        <h2>{item.title} - ${item.price}</h2>
                        <p className="description">{item.description}</p>
                        <ItemCount stock={item.stock} initial={item.stock >= 1 ? 1 : 1} onAdd={onAdd} />
                    </Col>
                </Row>
            </div>
        </Container>
    )
}

export default ItemDetail;