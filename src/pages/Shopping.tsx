import { useQuery } from 'react-query';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import LoadingAnimation from "../components/LoadingAnimation/loadinganimation";
import axios from 'axios';
import BackgroundImage from '../images/background_2.jpg';
import '../styles/Shopping.css';

async function getFeatured() {
    const res = await axios.get(import.meta.env.VITE_SERVER_API);
    return res.data;
}

async function getFilters() {
    const res = await axios.get(import.meta.env.VITE_SERVER_API_FILTERS);
    return res.data;
}


function Shopping() {

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams({ gender: "All", Brand: "All", Type: "All"})
    const getGender = searchParams.get("gender")
    const getBrand = searchParams.get("Brand")
    const getType = searchParams.get("Type")
    const { data: featuredData, status: featuredStatus } = useQuery('featured', getFeatured);
    const { data: filtersData, status: filtersStatus } = useQuery('filters', getFilters);

    if (featuredStatus === 'loading' || filtersStatus === 'loading') {
        return <LoadingAnimation />
    }

    if (featuredStatus === 'error' || filtersStatus === 'error') {
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

                <div className='filters'>
                    <div className='filter'>
                        <select 
                            name="gender" 
                            className='gender_filter'
                            defaultValue={"All"}  
                            onChange={ (e : any) => setSearchParams(prev => {
                                prev.set("gender", e.target.value)
                                return prev
                            }, { replace: true} ) }
                        >
                            <option value={"All"}>All</option>
                            {filtersData.sex.map((item: any, key: number) => (
                                <option value={item} key={key}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className='filter'>
                        <select
                            name="brand"
                            className='brand_filter'
                            defaultValue={"All"}
                            onChange={ (e : any) => setSearchParams(prev => {
                                prev.set("Brand", e.target.value)
                                return prev
                            }, { replace: true} ) }
                        >
                            <option value={"All"}>All</option>
                            {filtersData.brand.map((item: any, key: number) => (
                                <option value={item} key={key}>{item}</option>
                            ))}
                        </select>
                    </div>

                    <div className='filter'>
                        <select
                            name="type"
                            className='type_filter'
                            defaultValue={"All"}
                            onChange={ (e : any) => setSearchParams(prev => {
                                prev.set("Type", e.target.value)
                                return prev
                            }, { replace: true} ) }
                        >
                            <option value={"All"}>All</option>
                            {filtersData.type.map((item: any, key: number) => (
                                <option value={item} key={key}>{item}</option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className='items'>
                    {featuredData
                    .filter((item: any) => getGender !== "All" && getGender !== null? item.sex === getGender : item)
                    .filter((item: any) => getBrand !== "All" && getGender !== null? item.brand === getBrand : item)
                    .filter((item: any) => getType !== "All" && getGender !== null? item.type === getType : item)
                    .map((item: any) => (
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