const getStoredCart = () => {
    const stored = localStorage.getItem('cart')
    if (stored) {
        return JSON.parse(stored)
    }
    return []
}

const saveCartToLs = cart => {
    const cartString = JSON.stringify(cart);
    localStorage.setItem('cart', cartString)
}

const addToCart = (id) => {
    const cart = getStoredCart()
    cart.push(id)
    saveCartToLs(cart)
}

const removeFromLs = id => {
    const cart = getStoredCart()
    const remaining = cart.filter(idx => idx !== id);
    saveCartToLs(remaining)
}

export { addToCart, getStoredCart, removeFromLs }