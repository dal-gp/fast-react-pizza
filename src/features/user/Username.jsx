import { useSelector } from "react-redux";

/**
 * Read username from Redux store.
 * state.user -> the user slice
 * state.user.username => the username property
 */
function Username() {
  const username = useSelector((state) => state.user.username);

  // Don't render ifno username set yet
  if (!username) return;
  return (
    <div className="hidden text-sm font-semibold md:block">{username}</div>
  );
}

export default Username;
