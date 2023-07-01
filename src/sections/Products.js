import { Link } from "react-router-dom"
import { calcStars } from "../functions/functions.js"

const Products = () => {
    const products = [
        {
            id: 1,
            brand: "Nike",
            img: "shoes1.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: 100.99,
            stars: 2.5
        },
        {
            id: 2,
            brand: "Nike",
            img: "shoes2.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: 200.99,
            stars: 4.5
        },
        {
            id: 3,
            brand: "Nike",
            img: "shoes3.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: 175.99,
            stars: 3.5
        },
        {
            id: 4,
            brand: "Nike",
            img: "shoes4.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: 120.99,
            stars: 4
        },
        {
            id: 5,
            brand: "Nike",
            img: "shoes5.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: 150.99,
            stars: 5
        },
        {
            id: 6,
            brand: "Nike",
            img: "shoes6.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: 220.99,
            stars: 4.5
        },
        {
            id: 7,
            brand: "Nike",
            img: "shoes7.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: 110.99,
            stars: 3
        },
        {
            id: 8,
            brand: "Nike",
            img: "shoes8.png",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
            price: 150.99,
            stars: 5
        }
    ]

    return (
        <div className="products" id="Products">
            <h1>Products</h1>
            <div className="box">
                {products.map(product=>(
                    <div className="card" key={product.id}>
                        <div className="smallCard">
                            <i className="fa-solid fa-heart"></i>
                            <i className="fa-solid fa-share"></i>
                        </div>
                        <div className="image">
                            <img src={`./image/${product.img}`} alt="" />
                        </div>
                        <div className="productText">
                            <h2>{product.brand}</h2>
                            <p>{product.desc}</p>
                            <h3>${product.price}</h3>
                            <div className="productStars">{calcStars(product.stars)}</div>
                        </div>
                        <Link to="#" className="btn">Add To Cart</Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Products;