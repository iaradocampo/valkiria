import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ItemDetail from './ItemDetail';
import Loader from "./Loader";
import { dataBase } from "../firebase/firebase";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    const [loader, setLoader] = useState();

    const { idProduct } = useParams();
  
    useEffect(() => {

        const itemQuery = dataBase.collection('items').doc(idProduct);

        itemQuery.get()
        .then((item) => {
            setItem({
                id: idProduct, ...item.data(),
            });
            
        })
        .finally(() => {
            setTimeout(() => {
                setLoader(false);
            }, 2000)
        })
        
    }, [idProduct]);
  
  
    return (
        <Container>
            <>
            {
                loader ? 
                    <Loader/> 
                : 
                    <ItemDetail item={item} />
            }
            </>
        </Container>
    );
};

export default ItemDetailContainer;