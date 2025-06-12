import { useLoaderData } from "react-router";
import Product from "./Product";

const Products = () => {

    const products = useLoaderData()

    return (
        <section className=" mt-2 lg:mt-12 md:mt-8 sm:mt-4 dark:bg-gray-100 dark:text-gray-900 rounded-lg p-4 text-center">
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 justify-items-center my-12 gap-16'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}></Product>)
                }
            </div>
        </section>
    );
};

export default Products;