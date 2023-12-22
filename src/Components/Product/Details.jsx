import { Link, useLoaderData } from "react-router-dom";

const Details = () => {
    const loaderData = useLoaderData();
    console.log(loaderData, 'hello');
    const { Price, brand, description, img, name, title } = loaderData;

    return (
        <div className="bg-[#fafafa] ">
            <div className='grid grid-cols-1 lg:grid-cols-2 justify-items-center lg:max-w-7xl p-5 lg:py-[5rem] lg:mx-auto h-full  ' >
                <div className=' lg:flex lg:justify-evenly'>
                    <img className='w-[70%]' src={img} alt="hostpic" />
                </div>
                <div >
                    <h1 className=' text-4xl lg:text-6xl text-cyan-500'> Brand : {brand}</h1><br />
                    <h1 className=' text-2xl lg:text-3xl text-cyan-500'>Name : {name}</h1><br />
                    <p className='lg:text-lg '>{title}</p><br />
                    <br />
                    <Link><button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">${Price}</button></Link>

                </div>

            </div>
            <div className="lg:max-w-7xl p-5 lg:py-[5rem] lg:mx-auto">
                <h1 className=' text-4xl lg:text-6xl text-cyan-500'>Description</h1><br /><br />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Details;