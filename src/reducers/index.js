import updateBookList from './book-list';
import updateShoppingCart from './shopping-cart';

const reducer = (state, action) => {
  return {
    bookList: updateBookList(state, action),
    shoppingCart: updateShoppingCart(state, action)
  };
};

export default reducer;

// const initialState = {
//   bookList: {
//     books: [],
//     loading: true,
//     error: null
//   },
//
//   shoppingCart: {
//     cartItems: [],
//     orderTotal: 0
//   }
// }
