import { csrfFetch } from "./csrf";

const GET_BREWERIES = 'brewery/getBreweries';

export const getBreweries = (breweries) => {
  return { type: GET_BREWERIES, breweries };
};

export const fetchBreweries = () => async (dispatch) => {
  const response = await csrfFetch('/api/breweries');
  const breweries = await response.json();
  dispatch(getBreweries(breweries));
}

const initialState = {};

const breweryReducer = (state = initialState, action) => {
  const breweries = {...state};
  switch (action.type) {
    case GET_BREWERIES:
      action.breweries.forEach((brewery) => {
        breweries[brewery.id] = brewery;
      });
      return breweries;
    default:
      return state;
  }
};

export default breweryReducer;
