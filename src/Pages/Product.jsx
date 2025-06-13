
import { FaStar } from "react-icons/fa";
import { Authcontext } from "../firebaseAuth/Authcontext";
import { use } from "react";
import { Link } from "react-router";


const Product = ({ product }) => {

    const { title, price, image, rating} = product

    const { handleAddToCart } = use(Authcontext)

    return (
        <div className="card bg-base-100 w-96 shadow-sm transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-blue-500">
            <figure>
                <img className='h-50 my-4 transition-transform duration-500 hover:scale-110'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body text-start">
                <h2 className="card-title">{title}</h2>
                <p className='text-lg font-semibold'>Price : {price}</p>
                <p className='text-lg flex items-center  gap-2'>Rating {rating.rate} <div className='flex'>
                    <FaStar color='gold' />
                    <FaStar color='gold' />
                    <FaStar color='gold' />
                </div></p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleAddToCart(product)} className="btn btn-primary   transition-all duration-300 hover:bg-blue-600 hover:ring-2 hover:ring-offset-2 hover:ring-blue-300 hover:scale-105 shadow">Add to cart</button>
                </div>
            </div>

        </div>
    );
};

export default Product;