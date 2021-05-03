import React from 'react';
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal';
import FlipMove from 'react-flip-move';


function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className = "checkout__left">
                <img className = "checkout__ad" alt=""
                src="https://th.bing.com/th/id/R61bd3213939b111d55d0555729607eb7?rik=CGv1%2fVI6JXS2QA&riu=http%3a%2f%2fcdn-blog.cpcstrategy.com%2fwp-content%2fuploads%2f2017%2f03%2fCPC_Billboard-Banner_Blog-Amazon-SPG-2017-c.png&ehk=ll28XEbsRPRfi02To5kkt5jo7wqFYSGFtx6lm3afR2E%3d&risl=&pid=ImgRaw">
                    </img>
            <div>
                <h3>Hello, {user?.email}</h3>
                <h2 className = "checkout__title">Your Shopping Basket</h2>
            
            {basket.map(item => (
            <CheckoutProduct
            
            id = {item.id}
            title = {item.title}
            image = {item.image}
            price = {item.price}
            rating = {item.rating}
            
            />
          
            ))}
           
            </div>
            </div>
            <div className = "checkout__right">
                <Subtotal />
                
            </div>
            
        </div>
    )
}

export default Checkout
