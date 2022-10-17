
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {

    // const { product, handleAddToCart } = props;
    const { name, price, img, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info ">
                <p className='product-name'>{name}</p>
                <h4 className='font-bold mt-5'>Price: ${price}</h4>
                <p className='text-lg mt-5'><small>Manufacturer: {seller}</small></p>
                <p className='text-lg mt-2 mb-14'><small>Ratings: {ratings} Star</small></p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='flex items-center  bg-pink-500 hover:bg-pink-800 text-white absolute bottom-0 w-full left-0 p-2 rounded-b-lg justify-center'>
                <p className='mr-5'>Add To Cart </p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>


        </div>
    );
};

export default Product;