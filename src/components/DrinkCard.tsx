import { Drink,  } from '../types/index';
type DrinkCardProps = {
    drink: Drink
}
export const DrinkCard = ({drink}: DrinkCardProps) => {
  return (
    <div>
      <h2>{drink.strDrink}</h2>
      <img src={drink.strDrinkThumb} alt={drink.strDrink} />
    </div>
  )
}
