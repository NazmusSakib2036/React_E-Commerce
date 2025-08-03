// For Add Item to Cart
export const addCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// For Delete Item from Cart (decrements quantity or removes if qty is 1)
export const delCart = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}

// For Clear Cart
export const clearCart = () => {
    return {
        type: "CLEAR_CART",
    }
}

// NEW: For Complete Item Removal from Cart
export const removeProductCompletely = (product) => {
    return {
        type: "REMOVE_PRODUCT_COMPLETELY", // New action type
        payload: product
    }
}