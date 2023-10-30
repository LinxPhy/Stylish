import '../styles/Homepage.css';
import { useQuery } from 'react-query';
import axios from 'axios';
import BackgroundImage from '../images/background_1.avif';
import StreetWear from '../images/street_wear.avif';
import Flippers from '../images/flippers.avif';
import Shoes from '../images/shoes.avif';
import { useNavigate } from 'react-router-dom';

async function getFeatured() {
    const res = await axios.get(import.meta.env.VITE_SERVER_API);
    console.log(typeof res.data)
    return res.data;
}

function Homepage() {

    const { data, status } = useQuery('featured', getFeatured);
    const navigate = useNavigate();

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
                    <h2>Browse Collection</h2>
                    <p> Up your looks, prepare yourself with a new collection at Stylish  </p>
                    <button className='buttonStyle1'> Shop Now </button>
                </div>
            </section>

            <section className='Featured homepage_style'>
                <h2>Featured</h2>

                <div className='Featured_items'>
                    {data.slice(0, 4).map((item: any) => (
                        <div className='Featured_item' key={item.id}>
                            <img src={item.display_image} alt={item.title} onClick={() => navigate(`/item/${item.id}/${item.name}`)} />
                            <div className='Featured_item_text'>
                                <h3>{item.name}</h3>
                                <p>£.{item.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <section className='collections '>
                <div className='all_collections homepage_style'>
                    <div className='left_collection'>
                        <img src={StreetWear} alt="street wear" />
                        <h2>Street Wear</h2>
                        <p>Shop Our Collection</p>
                    </div>
                    <div className='right_collection'>
                        <div>
                            <img src={Shoes} alt="shoes" />
                            <h2>Shoes</h2>
                            <p>Shop Our Collection</p>

                        </div>
                        <div>
                            <img src={Flippers} alt="flippers" />

                            <h2>Flippers</h2>
                            <p>Shop Our Collection</p>

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )

}

export default Homepage;