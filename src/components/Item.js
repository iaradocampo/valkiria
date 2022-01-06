import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const {Img, Body, Title} = Card;

const Item = ({id, title, price, image}) => {
    return <>
        <Col sm={12} md={6} lg={4}>
            <Card>
                <div className="card-img-container">
                    <div>
                    <Img src={image}/>
                    </div>
                </div>
                <div className="content">
                    <Body>
                        <Title>{title}</Title>
                        <p className="precio">${price}</p>
                    </Body>
                    <Link to={`/detalle/${id}`}>
                        <button className='btn'>ver detalle</button>
                    </Link>
                </div>
            </Card>
        </Col>
    </>
}

export default Item;