import axios from 'axios';
import LoadingAnimation from "../components/LoadingAnimation/loadinganimation";
import { useQuery } from 'react-query';
import { ShoppingContext } from '../context/ShoppingContext';
import { useContext, useEffect, useState } from 'react';
import '../styles/Item.css';

async function getItem() {
    const param = window.location.pathname.split('/')[2];
    const res = await axios.get(import.meta.env.VITE_SERVER_API_ITEM + '/' + param);
    return res.data;
}

function Item() {

    const { data, status, isLoading } = useQuery('item', getItem);
    const [size, setSize] = useState('/');
    const { addToCart, quantity, setQuantity, increaseQuantity, decreaseQuantity }: any = useContext(ShoppingContext)

    useEffect(() => {
        setQuantity(0)
    }, [])

    function OtherImages(images: String, display_image: String) {
        let imageList = images.split(',') as any;
        imageList.push(display_image)

        return (
            <>
                {imageList.map((image: any, key: any) => (
                    <img src={image} alt={image} key={key} loading='eager' />
                ))}
            </>
        )
    }

    function getSize(size: String) {
        let sizeList = size.split(',') as any;
        return (
            <>
                <option value='/' defaultValue={'/'}>Select size</option>
                {sizeList.map((size: any, key: any) => (
                    <option value={size} key={key}>{size}</option>
                ))}
            </>
        )
    }

    if (isLoading){
        return <LoadingAnimation />
    }

    if (status === 'error') {
        return <div>Error</div>
    }



    return (
        <main className='shopping_item_page'>
            <section className='shopping_item_container homepage_style'>
                <div className='shopping_item'>
                    {OtherImages(data.otherImages, data?.image)}
                </div>

                <div className='shopping_item_text'>
                    <div className='shopping_item_text_header'>
                        <h2>{data.name}</h2>
                        <p className='brand'>{data.brand}</p>
                        <p className='colour'><b>Colour: </b> {data.colour}</p>
                    </div>

                    <p className='price'>£ {data.price}</p>
                    <div className='size'>
                        <label htmlFor="size"><b>Size:</b></label>
                        <select name="size" id="size" value={size} onChange={(e) => setSize(e.target.value)}>
                            {getSize(data.size)}
                        </select>
                    </div>

                    <p className='gender'><b>{data.sex}</b></p>

                    <div className='quantity'>
                        <button className='left_button' onClick={() => decreaseQuantity()}>-</button>
                        <span>{quantity}</span>
                        <button className='right_button' onClick={() => increaseQuantity()}>+</button>
                    </div>

                    <p className='description'>{data.description}</p>
                    <button className='buttonStyle1 shopping_item_button' onClick={() => addToCart(data.id, data.price, quantity, size, data.name, data.image)}> Add to Basket </button>
                </div>
            </section>
        </main>
    )


}

export default Item;
