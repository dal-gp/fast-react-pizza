import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { getUsername } from "../user/userSlice";
import { clearCart, getCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

function Cart() {
  /**
   * getCart selector reads state.cart.cart from Redux.
   * Replaces the fakeCart array that was here before.
   */
  const cart = useSelector(getCart);
  /**
   * getUsername selector reads state.user.username from Redux.
   */
  const username = useSelector(getUsername);
  const dispatch = useDispatch();

  // Show empty state if cart has no item
  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="mt-3 divide-y divide-stone-200 border-b border-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        {/**
         * Inline dispatch - no handler function needed for a simple one-liner.
         * clearCart() creates the action object, dispatch sends it to the store.
         */}
        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
