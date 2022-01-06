import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { dataBase } from "../../firebase/firebase";
import OrderData from "./OrderData";
import Loader from "../Loader";
import EmptyOrder from './EmptyOrder';

function Order(){

    const { orderId } = useParams();

    const [orderData, setData] = useState(true);

    const [loader, setLoader] = useState(true);

    const [exists, setExist] = useState(false);

    useEffect(() => {

        const dbQuery = dataBase.collection('orders').doc(orderId);

        dbQuery.get()
        .then((order) => {

            setExist(order.exists);

            setData({
                id: orderId, ...order.data()
            })
        })

        .finally(() => {

            setTimeout(() => {

                setLoader(false);

            }, 2000)
        })

    }, [orderId, loader])

    return loader ? (
     <Loader />
     
    )
    : exists === true ? (
        <OrderData data={orderData}/>
    )
    :
    (
        <EmptyOrder/>
    )
}

export default Order;