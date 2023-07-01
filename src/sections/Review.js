import {calcStars} from "../functions/functions.js"

const Review = () => {
    const reviews = [
        {
            id: 1,
            name: "Ranidi Lochana",
            img: "girl_dp1.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
            stars: 4.5
        },
        {
            id: 2,
            name: "Sayuru Tharanga",
            img: "man_dp1.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
            stars: 3.5
        },
        {
            id: 3,
            name: "Senuda Dilwan",
            img: "man_dp2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
            stars: 2.5
        },
        {
            id: 4,
            name: "Kaveesha Vidurangi",
            img: "girl_dp2.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
            stars: 3.5
        },
        {
            id: 5,
            name: "John Deo",
            img: "girl_dp3.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
            stars: 4.5
        },
        {
            id: 6,
            name: "Charith Aruna",
            img: "man_dp3.jpg",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, amet nesciunt voluptatem cum architecto ipsum vero nulla voluptatibus dolorum modi assumenda eum? Aliquid inventore velit ipsa repellat numquam atque dolores!",
            stars: 5
        }
    ]

    return (
        <div className="review" id="Review">
            <h1>Customer's<span>Review</span></h1>

            <div className="reviewBox">
                {reviews.map(review=>(

                    <div className="reviewCard" key={review.id}>
                        <div className="cardTop">
                            <div className="profile">

                                <div className="profileImage">
                                    <img src={`./image/${review.img}`} alt="" />
                                </div>

                                <div className="name">
                                    <strong>{review.name}</strong>
                                    <div className="like">{calcStars(review.stars)}</div>
                                </div>
                            </div>
                        </div>

                        <div className="comment">
                            <p>{review.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
 
export default Review;