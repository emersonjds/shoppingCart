import {
  addQuantityOfItem,
  addToCart,
  removeAllFromCart,
  removeQuantityOfItem,
} from '../../../../src/redux/slices/shoppingSlice';
import store from '../../../../src/redux/store';

describe('shopping slice', () => {
  let item = {
    id: 1,
    title: 'test product',
    image: 'image test',
    category: 'test product',
    price: 10,
  };

  test('should add item on cart', () => {
    store.dispatch(addToCart(item));
    expect(store.getState().shopping.cart).toEqual([item]);
  });

  test('should add quantity of item on cart', () => {
    let product = { ...item, quantity: 1 };
    store.dispatch(addQuantityOfItem(product));
    expect(store.getState().shopping.cart[0]?.quantity).toEqual(2);
  });

  test('should remove quantity of item on cart', () => {
    let product = { ...item, quantity: 2 };
    store.dispatch(removeQuantityOfItem(product));
    expect(store.getState().shopping.cart[0]?.quantity).toEqual(1);
  });

  test('should remove all items from cart', () => {
    store.dispatch(removeAllFromCart());
    expect(store.getState().shopping.cart).toEqual([]);
  });
});
