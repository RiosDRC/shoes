export function calcStars(number) {
    const string = number.toFixed(1)
    const nat = parseInt(string.split(".")[0])
    const dec = parseInt(string.split(".")[1])
    let stars = []
    for(let i=0; i < nat; i++) {
        stars.push(<i key={i + 1} className="fa-solid fa-star"></i>)
    }
    if (dec === 5) {
        stars.push(<i key={nat + 1} className="fa-solid fa-star-half-stroke"></i>)
        for(let i = (Math.round(number) + 1); i <= 5; i++) {
            stars.push(<i key={i} className="fa-regular fa-star"></i>)
        }
    } else {
        for(let i = (nat + 1); i <= 5; i++) {
            stars.push(<i key={i} className="fa-regular fa-star"></i>)
        }
    }

    return stars
};