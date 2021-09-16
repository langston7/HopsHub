import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addOneDrink } from '../../store/drinkReducer';

import "./NewDrink.css"

function NewDrink(){

  const dispatch = useDispatch();

  const [beerName, setBeerName] = useState();
  const [breweryName, setBreweryName] = useState();
  const [abv, setAbv] = useState();
  const [ibu, setIbu] = useState();
  const [variety, setVariety] = useState();

  const updateBeerName = (e) => setBeerName(e.target.value)
  const updateBreweryName = (e) => setBreweryName(e.target.value)
  const updateAbv = (e) => setAbv(e.target.value)
  const updateIbu = (e) => setIbu(e.target.value)
  const updateVariety = (e) => setVariety(e.target.value)



  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      beerName,
      breweryName,
      abv,
      ibu,
      variety,
    }
    await dispatch(addOneDrink(payload));
  }


  return(
    <div class="new-drink-container">
      <div class="new-drink-inner">
        <form id="new-drink-form" onSubmit={handleSubmit}>
          <label for="beerName" class="form-label">BEER NAME</label>
          <input name="beerName" type="text" required onChange={updateBeerName}></input>
          <label for="breweryName" class="form-label">BREWERY NAME</label>
          <input name="breweryName" type="text" required onChange={updateBreweryName}></input>
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
