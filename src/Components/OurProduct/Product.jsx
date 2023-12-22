import { useState } from "react";
import Catagori from "./Catagori";

const Product = () => {
    const [products, setProducts] = useState([])

    fetch('Catagori.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    return (
        <div className="py-[2rem] text-center ">
            <h1 className="text-3xl">Our Categories</h1><br />
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 justify-items-center	 ">
                {
                    products.map(product => <Catagori key={product.id} product={product} />)
                }
            </div>
        </div>
    );
};

export default Product;



