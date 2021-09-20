import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addOneDrink } from '../../store/drinkReducer';
import { fetchBreweries } from '../../store/breweryReducer';
import "./NewDrink.css"
import { useHistory } from 'react-router';

function NewDrink(){
  const sessionUser = useSelector(state => state.session.user);
  const userId = sessionUser.id;
  const dispatch = useDispatch();
  const history = useHistory();
  const breweries = useSelector(state => Object.values(state.brewery));

  const [beerName, setBeerName] = useState();
  const [breweryId, setBreweryId] = useState('1');
  const [abv, setAbv] = useState();
  const [ibu, setIbu] = useState();
  const [variety, setVariety] = useState();

  const updateBeerName = (e) => setBeerName(e.target.value)
  const updateBreweryName = (e) => setBreweryId(e.target.value)
  const updateAbv = (e) => setAbv(e.target.value)
  const updateIbu = (e) => setIbu(e.target.value)
  const updateVariety = (e) => setVariety(e.target.value)

  useEffect(() => {
    dispatch(fetchBreweries());
  }, [dispatch])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      beerName,
      breweryId,
      abv,
      ibu,
      variety,
      userId,
    }
    await dispatch(addOneDrink(payload));
    history.push('/drinks');
  }


  return(
    <div class="new-drink-container">
      <div class="new-drink-inner">
        <form id="new-drink-form" onSubmit={handleSubmit}>
          <label for="beerName" class="form-label">BEER NAME</label>
          <input name="beerName" type="text" required onChange={updateBeerName}></input>
          <label for="breweryName" class="form-label">BREWERY NAME</label>
          <select name="breweryName" required onChange={updateBreweryName}>
            {breweries.map((brewery) =>
              <option value={brewery.id}>{brewery.name}</option>
            )}
          </select>
          <div>
            <label for="abv" class="form-label">ABV</label>
            <input name="abv" type="number" class="form-number" required onChange={updateAbv}></input>
            <label for="ibu" class="form-label">IBU</label>
            <input name="ibu" type="number" class="form-number" required onChange={updateIbu}></input>
            <label for="variety" class="form-label">VARIETY</label>
            <input name="variety" type="text" required onChange={updateVariety}></input>
          </div>
          <button class="add-drink-button">Add New Beer</button>
        </form>
      </div>
    </div>
  )

}

export default NewDrink;
