/* eslint-disable react/prop-types */

const Catagori = ({product}) => {
    const {img , title} = product;
    return (
        <div className="card -z-10 w-[8.25rem] lg:w-60 bg-base-100 shadow-xl">
        <figure><img className="w-[3rem]" src={img} alt="Shoes" /></figure>
        <div className="card-body ">
          <h2 className=" text-center">
            {title}
          </h2>
          
        </div>
      </div>
    );
};

export default Catagori;