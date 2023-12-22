import { useLoaderData } from "react-router-dom";
import Carousels from "../../Components/Carousel/Carousels";
import OurBrand from "../../Components/OurBrand/OurBrand";
import Product from "../../Components/OurProduct/Product";
import Products from "../../Components/Product/Products";

const Home = () => {
    const loader = useLoaderData()
    return (
        <div className="max-w-[90vw] mx-auto">
            <Carousels/>
            <OurBrand/>
            <Product/>
            <div className="text-center py-[4rem] ">
            <h1 className="text-5xl my-[2rem]">Featured Products</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                
                {
                    loader.slice(0,8).map(data => <Products key={data._id} data={data} />)
                }
            </div>
            </div>
        </div>
    );
};

export default Home;