import { useContext, useEffect, useState } from "react"
import { DataContext } from "../context/DataContext"
import { products } from '../constants/constants'

const CartWindow = () => {
    const { userChoices, setUserChoices, setIsCartVisible } = useContext(DataContext);
    const [total, setTotal] = useState({});
    const [ roundedTotal, setRoundedTotal ] = useState(0);

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

  const handleSum = (e, price) => {
    setTotal(prev => ({...prev, [e.target.name]: price * e.target.value}))
  }

  useEffect(() => {
    setRoundedTotal((Object.values(total).reduce((total, currentValue) => total + currentValue, 0)).toFixed(2))
  }, [total])

  return (
    <div className="window">
        <div className="closeX">
            <i className="fa-solid fa-square-xmark" onClick={()=>setIsCartVisible(prev=>!prev)}/>
        </div>
        <div className="cartProducts">
            {products.filter(item => (userChoices.onCart.includes(item.id))).map((item => (
                <div className="cartProducts-card" key={item.id}>
                    <img src={item.img} alt=""/>

                    <div className="info">
                        <h3>{item.brand}</h3>
                        <p>{item.desc}</p>
                        <h4>$ {item.price}</h4>
                        <p>5K+ bought in past month</p>
                        <div className="options">
                          <input className="numbers" type="number" min='0' max='10' name={`product_${item.id}`} onChange={e => handleSum(e, item.price)}/>
                          <button onClick={() => handleAdd(item)}>Discard</button>
                          <button onClick={() => handleFav(item)}>{userChoices.fav.includes(item.id) ? 'Remove From Favorites' : 'Add To Favorites'}</button>
                        </div>
                    </div>
                </div>
            )))}
            {userChoices.onCart.length === 0
            ? <h5>No items added so far</h5> : null
            }
        </div>
          {roundedTotal > 0
          ? <div className="total">
              <h4>Subtotal: ${roundedTotal}</h4>
              <button>Proceed to checkout</button>
            </div>
          : null
          }
    </div>
  )
}

export default CartWindow