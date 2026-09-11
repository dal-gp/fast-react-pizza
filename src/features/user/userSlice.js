import { createSlice } from "@reduxjs/toolkit";

/*
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}
*/
const initialState = {
  username: "", // empty until user enters name on Homepage
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * Updates the stored username.
     * RTK allows direct state mutation - Immer handles immutability behind
     * the scenes.
     * @param {string} action.payload - The new username
     */
    updateName(state, action) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions; // action creators
export default userSlice.reducer; // for configureStore

/**
 * Selectors - co-located in slice file so any component can import and reuse.
 * Convention: prefix with 'get'.
 *
 * Note: state.user.username because:
 *  state.user = the user slice (name: "user" in configureStore)
 *  state.user.username = the username property in initialState
 */

/** The username */
export const getUsername = (state) => state.user.username;
