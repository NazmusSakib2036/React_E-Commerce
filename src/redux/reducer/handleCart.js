// Retrieve initial state from localStorage if available
const getInitialCart = () => {
  const storedCart = localStorage.getItem("cart");
  try {
    return storedCart ? JSON.parse(storedCart) : [];
  } catch (e) {
    console.error("Failed to parse cart from localStorage:", e);
    return []; // Return empty array if parsing fails
  }
};

const handleCart = (state = getInitialCart(), action) => {
  const product = action.payload;
  let updatedCart;

  switch (action.type) {
    case "ADDITEM":
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        updatedCart = state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        updatedCart = [...state, { ...product, qty: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    case "DELITEM": // This is for decrementing or removing when qty is 1
      const exist2 = state.find((x) => x.id === product.id);
      if (exist2) {
        if (exist2.qty === 1) {
          updatedCart = state.filter((x) => x.id !== exist2.id);
        } else {
          updatedCart = state.map((x) =>
            x.id === product.id ? { ...x, qty: x.qty - 1 } : x
          );
        }
      } else {
          updatedCart = state; // No change if product not found
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    // NEW: Case for unconditionally removing a product
    case "REMOVE_PRODUCT_COMPLETELY":
      updatedCart = state.filter((x) => x.id !== product.id); // Filter out the product entirely
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    case "CLEAR_CART":
      updatedCart = [];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;

    default:
      return state;
  }
};

export default handleCart;