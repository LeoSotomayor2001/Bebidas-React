import { useAppStore } from "../stores/useAppStore";
import { Drink } from "../types/index";
type DrinkCardProps = {
  drink: Drink;
};
export const DrinkCard = ({ drink }: DrinkCardProps) => {
  const {selectRecipe}= useAppStore()
  return (
    <div className="border shadow-lg ">
      <div className="overflow-hidden">
        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="hover:scale-125 transition-transform hover:rotate-2" />
      </div>
      <div className="p-5 ">
        <h2 className="text-2xl truncate font-black">{drink.strDrink}</h2>
        <button
          type="button"
          className="bg-orange-400 hover:bg-orange-600 mt-5 p-3 w-full font-bold text-white text-lg"
          onClick={() => selectRecipe(drink.idDrink)}
        >
          Ver receta
        </button>
      </div>
    </div>
  );
};
