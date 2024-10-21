import './Bottle.css'
const Bottle = ({ memorable, handleBottleCart }) => {
    // console.log(memorable);
    const { name, price, img } = memorable;
    return (
        <div className="img-content">
            <h5>Bottle: {name}</h5>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <hr />
            <button onClick={() => handleBottleCart(memorable)}>Purchase</button>
        </div>
    );
};

export default Bottle;