import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

/**
 * Pizza menu page.
 * Data is already available when component renders - no loading state needed here.
 * useLoaderData() automatically gets data from this route's loader
 */
function Menu() {
  /**
   * menu: array of pizza objects, provided by the loader.
   * No need to pass the loader name - React Router knows from the route config.
   * @type {Array}
   */
  const menu = useLoaderData();
  console.log(menu);
  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

/**
 * Loader for the /menu route.
 * Co-located with the Menu page - fetches data at navigation time.
 * React Router calls this automatically when user navigates to /menu.
 *
 * @returns {Promise<Array>} Array of pizza objects from the API.
 */
export async function loader() {
  const menu = await getMenu();
  return menu; // React Router stores this - retrieved via useLoaderData();
}

export default Menu;
