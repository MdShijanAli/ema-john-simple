
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = ({ product, handleAddToCart }) => {

    // const { product, handleAddToCart } = props;
    const { name, price, img, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <h4>Price: ${price}</h4>
                <p className='bottom'><small>Manufacturer: {seller}</small></p>
                <p className='btm'><small>Ratings: {ratings} Star</small></p>
            </div>

            <button onClick={() => handleAddToCart(product)} className='btn-cart'>
                <p>Add To Cart </p>
                <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
            </button>


        </div>
    );
};

export default Product;