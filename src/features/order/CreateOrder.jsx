import { useState } from "react";
import { Form, redirect } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

// Temporary - will come from Redux later
const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const cart = fakeCart;

  return (
    <div>
      <h2>Ready to order? Let's go!</h2>

      {/*
       * React Router Form - intercepts submission and calls the action.
       * No onSubmit, no useState for inputs, no loading state needed.
       * method="POST" tells React Router this is a write operation.
       */}
      <Form method="POST">
        <div>
          <label>First Name</label>
          <input type="text" name="customer" required />
        </div>

        <div>
          <label>Phone number</label>
          <div>
            <input type="tel" name="phone" required />
          </div>
        </div>

        <div>
          <label>Address</label>
          <div>
            <input type="text" name="address" required />
          </div>
        </div>

        <div>
          <input
            type="checkbox"
            name="priority"
            id="priority"
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div>
          {/*
           * Hidden input passes cart data into the action.
           * Cart comes from React state (Redux later) - can't be a visible field.
           * JSON.stringify required - form data must be a string.
           */}
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <button>Order now</button>
        </div>
      </Form>
    </div>
  );
}

/**
 * Action for the /order/new route.
 * Receives the submitted Form data via the request object.
 * No hooks allowed - use redirect() not navigate().
 *
 * @param {{request: Request}} actionArgs - provided by React Router
 * @returns {Response} redirect to the new order page
 */
export async function action({ request }) {
  /**
   * These two lines are always used together to get form data as a plain object.
   * request.formData() is a browser Web API - returns a FormData object.
   * Object.formEntries() converts it to {key: value} pairs.
   */
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  /**
   * Model the raw form data into the shape the API expects.
   * cart: JSON.parse converts the strigified hidden field input back to an array
   * priority: checkbox sends 'on' when checked, undefined when not → converts
   *  to boolean
   */
  const order = {
    ...data,
    priority: data.priority === "on",
    cart: JSON.parse(data.cart),
  };

  // Submit order to the API - response contains the new order with its
  // server assigned ID
  const newOrder = await createOrder(order);
  console.log(newOrder);

  // Redirect to the order confirmation page using the new ID
  // Cannot use useNavigation here - it's a hook, only works in components
  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
