import { ShoppingContext } from '../context/ShoppingContext';
import { useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/Basket.css'

function Basket(){

    const {cart, quantity, increaseQuantity, decreaseQuantity, removeFromCart, total, increaseBasketQuantity, decreaseBasketQuantity} : any = useContext(ShoppingContext)

    return(
        <main>
            <section className='basket homepage_style'>
                <h2>My Items</h2>

                <div className='basket_container'>
                    <div className="basket_items">
                        
                        {cart.map((item: any) => (
                            <div className='basket_item' key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <div className='basket_item_text'>
                                    <h5>{item.name}</h5>
                                    <p>£.{item.price}</p>
                                    <p>Size: {item.size}</p>
                                </div>

                                <div className='basket_item_quantity'>
                                    <h5>Quantity</h5>
                                    <div className='quantity'>
                                        <button className='left_button' onClick={() => decreaseBasketQuantity(item.id, item.size)}>-</button>
                                        <p>{item.quantity}</p>
                                        <button className='right_button' onClick={() => increaseBasketQuantity(item.id, item.size)}>+</button>
                                    </div>
                                    
                                </div>

                                <div className='basket_item_total'>
                                    <h5>Total</h5>
                                    <p>£.{(item.price * item.quantity).toFixed(2)}</p>
                                </div>

                                <div className='basket_item_remove' onClick={() => removeFromCart(item.id, item.size)}>
                                    <i className="fa-solid fa-x" ></i>
                                </div>
                            </div>
                            
                        ))}
                    </div>

                    <div className="basket_summary">
                        <h3>Summary</h3>
                        <div className="basket_summary_items">
                            <div className="basket_summary_item">
                                <p>Subtotal</p>
                                <p className='basket_summary_value'>£ {}</p>
                            </div>
                            <div className="basket_summary_item">
                                <p>Shipping</p>
                                <p className='basket_summary_value'>£ 0.00</p>
                            </div>
                            <div className="basket_summary_item">
                                <p>Total</p>
                                <p className='basket_summary_value'>£ {total.toFixed(2)}</p>
                            </div>
                        </div>
                        <button className='buttonStyle1'>Checkout</button>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default Basket;