import { useState } from "react";
import Brand from "./Brand";
import { Link } from "react-router-dom";

const OurBrand = () => {
    const [brands, setBrands] = useState([])
    fetch('Brand.json')
        .then(res => res.json())
        .then(data => setBrands(data))
    return (
        <div className="py-[4rem] text-center">
            <h1 className="text-3xl">Brand of Prodcuts</h1>
            <Link>
                <div className="grid grid-cols-2 md:grid-cols-4 justify-items-center	 ">

                    {
                        brands.map(brand => <Brand key={brand.id} brand={brand} />)
                    }

                </div>
            </Link>
        </div>
    );
};

export default OurBrand;

