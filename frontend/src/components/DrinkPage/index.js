import { useSelector, useDispatch } from 'react-redux';

function Drink(){
  const drinks = useSelector((state) => Object.values(state.drink));

  return(
    <div class="drink-container">
      <div class="drink-inner">
        <img></img>
        <div class="drink-info-left">
          <div class="drink-info-name">{drink.name}</div>
          <div class="drink-info-brewery">{drink.Brewery.name}</div>
          <div class="drink-info-variety">{drink.variety}</div>
        </div>
      </div>
    </div>

  );

}
