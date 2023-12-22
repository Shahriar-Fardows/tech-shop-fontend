
/* eslint-disable react/prop-types */
const Brand = ({ brand }) => {
  const { url } = brand;
  return (

      <div className="card -z-10 w-[8.25rem] lg:w-60 bg-base-100 shadow-xl mt-4 justify-center items-center">
        <img className="w-[5rem]" src={url} alt="Shoes" />
      </div>

  );
};

export default Brand;