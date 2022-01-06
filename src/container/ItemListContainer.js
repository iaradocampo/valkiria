import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import ItemList from '../components/ItemList';
import Loader from '../components/Loader';
import { dataBase } from "../firebase/firebase";

const ItemListContainer = () => {

    const [items, setItems] = useState([]);

    const [loader, setLoader] = useState();

    const { idCategory } = useParams();

    useEffect(() =>{

        setLoader(true);

        const itemsCollection = dataBase.collection('items');

        let queryItems;

        idCategory === undefined ? 
            (queryItems = itemsCollection) 
        : 
            (queryItems = itemsCollection.where(
                'category', "==", idCategory)
            );

        queryItems.get()
        .then((items) => {
            setItems(
                items.docs.map((item) => ({
                    id: item.id, ...item.data(),
                }))
            );
        })
        .finally(() => setTimeout(() => {
                setLoader(false);
            }, 2000)
        );

    }, [idCategory])

    function load () {
        return loader ? (
            <Loader />
        ) 
        : 
        (
            <Container>
                <div className="item-list">
                    {items.length < 1 ? <Loader /> : <ItemList items={items} />}
                </div>
            </Container>
        )
    }
        
    return load();
}

export default ItemListContainer;