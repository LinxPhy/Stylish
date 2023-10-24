import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import BackgroundImage from '../images/background_2.jpg';
import '../styles/Shopping.css';

async function getFeatured() {
    const res = await axios.get(import.meta.env.VITE_SERVER_API);
    return res.data;
}


function Shopping(){

    const navigate = useNavigate();
    const { data, status } = useQuery('featured', getFeatured);

    if (status === 'loading') {
        return <div>Loading...</div>
    }

    if (status === 'error') {
        return <div>Error</div>
    }

    return (
        <main>
            <section className='background_image'>
                <img src={BackgroundImage} alt="background" />
                <div className='background_image_text'>
                    <h2>Shopping Basket</h2>
                    <p>Continue to our premium shopping items  </p>
                </div>
            </section>

            <section className='All_Items  homepage_style'>
            <h2>All Items</h2>
                <div className='items'>
                    {data.map((item: any) => (
                        <div className='item' key={uuidv4()}>
                            <img src={item.image} alt={item.title} onClick={() => navigate(`/item/${item.id}/${item.name}`)} />
                            <div className='item_text'>
                                <h3>{item.name}</h3>
                                <p>£.{item.price}</p>
                            </div>
                        </div>
                    
                    ))}
                </div>
            </section>
        </main>
    )

}

export default Shopping;