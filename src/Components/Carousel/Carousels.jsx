import { Carousel } from 'flowbite-react';
import img1 from '../../assets/img/0.jpg'
import img2 from '../../assets/img/1.png'
import img3 from '../../assets/img/2.png'
import img4 from '../../assets/img/3.png'
import img5 from '../../assets/img/4.png'
const Carousels = () => {
    return (
        <div className="h-56 sm:h-[30rem] xl:h-80 2xl:h-[35rem]">
            <Carousel>
                <img  src={img1} alt="..." />
                <img src={img2} alt="..." />
                <img src={img3} alt="..." />
                <img src={img4} alt="..." />
                <img src={img5} alt="..." />
               
               
            </Carousel>
        </div>
    );
};

export default Carousels;