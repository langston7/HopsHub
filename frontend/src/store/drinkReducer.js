import { csrfFetch } from "./csrf";

const GET_DRINKS = 'drink/getDrinks';
const ADD_DRINK = 'drink/addDrink';
const SEARCH_DRINKS = 'drink/searchDrinks';

export const getDrinks = (drinks) => {
  return { type: GET_DRINKS, drinks };
};

export const addDrink = (drink) => {
  return { type: ADD_DRINK, drink };
}

export const searchDrink = (drinks) => {
  return { type: SEARCH_DRINKS, drinks };
}

export const fetchDrinks = () => async (dispatch) => {
  const response = await csrfFetch('/api/drinks');
  const drinks = await response.json();
  dispatch(getDrinks(drinks));
}

export const searchDrinks = (searchInput) => async (dispatch) => {
  const response = await csrfFetch('/api/drinks');
  let drinks = await response.json();
  drinks = drinks.filter((drink) => drink.name.includes(searchInput));
  dispatch(searchDrink(drinks));
}

export const addOneDrink = (drink) => async (dispatch) => {
  const response = await csrfFetch(`/api/drinks/${drink.id}`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(drink)
  })

  if(response.ok) {
    const newDrink = await response.json();
    dispatch(addOneDrink(newDrink));
  }
}

const initialState = {};

const drinkReducer = (state = initialState, action) => {
  const drinks = {...state};
  const search = {};
  switch (action.type) {
    case GET_DRINKS:
      action.drinks.forEach((drink) => {
        drinks[drink.id] = drink;
      });
      return drinks;
    case ADD_DRINK:
      drinks[action.drink.id] = action.drink;
      return drinks;
    case SEARCH_DRINKS:
      action.drinks.forEach((drink) => {
        search[drink.id] = drink;
      });
      return search;
    default:
      return state;
  }
};

export default drinkReducer;
