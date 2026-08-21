import { useNavigate, useRouteError } from "react-router-dom";

/**
 * Error boundary component for React Router.
 * Rendered when a loader, action, or component throws an error.
 * useRouteError() provides the actual error object.
 */
function Error() {
  const navigate = useNavigate();

  /**
   * The error thrown by a loader, action, or render.
   * error.data -> string thrown from a loader (e.g. 'Failed getting menu')
   * error.message -> JS Error message (e.g "No route matches URL /asdf")
   */
  const error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      {/* Show whichever error proprty exists */}
      <p>{error.data || error.message}</p>
      <button onClick={() => navigate(-1)}>&larr; Go back</button>
    </div>
  );
}

export default Error;
