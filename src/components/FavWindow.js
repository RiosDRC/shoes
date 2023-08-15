import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { products } from '../constants/constants'
import { calcStars } from "../functions/functions";

const FavWindow = () => {
    const { userChoices, setUserChoices, setIsFavVisible } = useContext(DataContext);

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
    <div className="window">
        <div className="closeX">
            <i className="fa-solid fa-square-xmark" onClick={()=>setIsFavVisible(prev=>!prev)}/>
        </div>
        <div className="favProducts">
            {products.filter(item => (userChoices.fav.includes(item.id))).map((item => (
                <div className="favProducts-card" key={item.id}>
                    <img src={item.img} alt=""/>

                    <div className="info">
                        <h3>{item.brand}</h3>
                        <p>{item.desc}</p>
                        <h4>$ {item.price}</h4>
                        <div className="productStars">{calcStars(item.stars)}</div>
                    </div>

                    <div className="buttons">
                        <button onClick={() => handleFav(item)}>Remove From Favorites</button>
                        <button onClick={() => handleAdd(item)}>{userChoices.onCart.includes(item.id) ? 'Remove From Cart' : 'Add To Cart'}</button>
                    </div>
                </div>
            )))}
            {userChoices.fav.length === 0
            ? <h5>No items added so far</h5> : null
            }
        </div>
    </div>
  )
}

export default FavWindow