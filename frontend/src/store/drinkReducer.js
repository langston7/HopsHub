const GET_DRINKS = 'review/getDrinks';
const ADD_DRINK = 'review/addDrink';

export const getDrinks = (drinks) => {
  return { type: GET_DRINKS, drinks };
};

export const addDrink = (drink) => {
  return { type: ADD_DRINK, drink };
}

export const fetchDrinks = () => async (dispatch) => {
  const response = await fetch('/api/drinks');
  const drinks = await response.json();
  dispatch(getDrinks(drinks));
};

export const addOneDrink = (drink) => async (dispatch) => {
  const response = await fetch(`/api/drinks/${drink.id}`, {
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
  const newEntries = {...state};
  switch (action.type) {
    case GET_DRINKS:
      action.drinks.forEach((drink) => {
        newEntries[drink.id] = drink;
      });
      return newEntries;
    case ADD_DRINK:
      newEntries[action.drink.id] = action.drink;
      return newEntries;
    default:
      return state;
  }
};

export default drinkReducer;
