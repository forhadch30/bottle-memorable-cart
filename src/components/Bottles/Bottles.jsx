import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToCart, getStoredCart, removeFromLs } from "../../Ulities/Ulities";
import Cart from "../Cart/Cart";
const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    const handleBottleCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart)
        addToCart(bottle.id)
    }

    const handleRemoveFromCart = id => {
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart)
        removeFromLs(id)
    }

    useEffect(() => {
        fetch('bottle.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    useEffect(() => {
        console.log('cart', bottles.length);
        if (bottles.length > 0) {
            const setLocalStorage = getStoredCart()
            console.log(setLocalStorage, bottles);
            const saveCart = []
            for (const id of setLocalStorage) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    saveCart.push(bottle)
                }
            }
            console.log('saved cart', saveCart);
            setCart(saveCart)

        }
    }, [bottles])


    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottles">
                {
                    bottles.map(bottle =>
                        <Bottle key={bottle.id}
                            handleBottleCart={handleBottleCart}
                            memorable={bottle}>
                        </Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;