import { calcStars } from "../functions/functions.js"
import { products } from '../constants/constants.js'
import { useContext } from "react"
import { DataContext } from "../context/DataContext.js"

const Products = () => {
    const { userChoices, setUserChoices } = useContext(DataContext)

    const handleAdd = (product) => {
        setUserChoices(prev => {
            const updatedOnCart = prev.onCart.includes(product.id)
              ? prev.onCart.filter(id => id !== product.id)
              : [...prev.onCart, product.id];
          
            return {...prev, onCart: updatedOnCart};
          });
    }


    const handleFav = (product) => {
        setUserChoices(prev => {
            const updatedOnCart = prev.fav.includes(product.id)
              ? prev.fav.filter(id => id !== product.id)
              : [...prev.fav, product.id];
          
            return {...prev, fav: updatedOnCart};
          });
    }

    return (
        <div className="products" id="Products">
            <h1>Products</h1>
            <div className="box">
                {products.map(product=>(
                    <div className="card" key={product.id}>
                        <div className="smallCard">
                            <i className={`fa-${userChoices.fav.includes(product.id) ? 'solid' : 'regular'} fa-heart`} onClick={()=>handleFav(product)}/>
                            <i className="fa-solid fa-share"/>
                        </div>
                        <div className="image">
                            <img src={product.img} alt="" />
                        </div>
                        <div className="productText">
                            <h2>{product.brand}</h2>
                            <p>{product.desc}</p>
                            <h3>${product.price}</h3>
                            <div className="productStars" onClick={() => alert('Thanks for your feedback!')}>{calcStars(product.stars)}</div>
                        </div>
                        <button className="btn"
                        onClick={()=>(handleAdd(product))}>
                            {userChoices.onCart.includes(product.id) ? 'Remove From Cart' : 'Add To Card'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Products;