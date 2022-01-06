import Item from "./Item";
import Row from 'react-bootstrap/Row';

const ItemList = ({items}) => {
  return (
    <div className="item-container">
      <Row>
        {items.map(prod =>{
          return(
              <Item key={prod.id} id={prod.id} category={prod.category} title={prod.title} price={prod.price} image={prod.image}/>
          )
        })}
      </Row>
    </div>
  )
}

export default ItemList;