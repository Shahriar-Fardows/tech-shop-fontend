import { useLoaderData } from "react-router-dom";
import Detailsss from "../../Components/Details/Detailsss";

const Shop = () => {
    const loaderData = useLoaderData();
    console.log(loaderData);

    return (
        <div className="max-w-[90vw] mx-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    loaderData.map(data => <Detailsss key={data._id} data={data} />)
                }
            </div>
        </div>
    );
};

export default Shop;