import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { fetchDrinks } from '../../store/drinkReducer';
import "./DrinkPage.css"

function DrinkPage(){
  const { drinkId } = useParams();
  const drink = useSelector(state => state.drink[drinkId]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDrinks());
  }, [dispatch])

  return(
    <div class="drink-container">
      <div class="drink-inner">
        <img src={drink?.imageURL} alt="drink" className="drink-image"></img>
        <div class="drink-info-left">
          <div class="drink-info-name">{drink?.name}</div>
          <div class="drink-info-brewery">{drink?.Brewery.name}</div>
          <div class="drink-info-variety">{drink?.variety}</div>
        </div>
      </div>
    </div>
  );
}

export default DrinkPage;
