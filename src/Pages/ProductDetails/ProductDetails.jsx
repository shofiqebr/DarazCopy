
// import ReactImageMagnify from "react-image-magnify";
import ReactImageMagnify from "react-image-magnify";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const ProductDetails = () => {


    const images = [
        {
            id: 1,
            image: "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp"
        },
        {
            id: 2,
            image: "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp"
        },
        {
            id: 3,
            image: "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp"
        },
        {
            id: 4,
            image: "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp"
        },
        {
            id: 5,
            image: "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp"
        },
    ]
    return (
        <div className="max-w-screen-xl mx-auto px-4 mt-5">
            <h1 className="text-3xl font-bold">This is Details Page </h1>
            <div className="grid grid-cols-3 mt-5">
                <div>
                    <Carousel showArrows={true}>
                       
                    </Carousel>
                </div>
                <ReactImageMagnify {...{
                            smallImage: {
                                alt: 'Wristwatch by Ted Baker London',
                                isFluidWidth: true,
                                src: "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp",
                            },
                            largeImage: {
                                src: "https://static-01.daraz.com.bd/p/190e7f0df8e9e2edf300eff263b63d49.jpg_750x750.jpg_.webp",
                                width: 1600,
                                height: 400
                            },isHintEnabled : false,pressMoveThreshold: 1
                        }} />
                <div>
                    
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default ProductDetails;