import { useMemo } from "react"
import { DrinkCard } from "../components/DrinkCard"
import { useAppStore } from "../stores/useAppStore"

export const FavoritesPage = () => {
  const { favorites } = useAppStore()
  const hasFavorites=useMemo(() => favorites.length > 0, [favorites]);
  return (
    <>
      <h1 className="text-6xl font-extrabold">Favoritos</h1>
      {!hasFavorites && <p className="text-2xl my-10 text-center">No hay favoritos aún</p>}

      {hasFavorites && <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10">
        {favorites.map((drink) => (
          <DrinkCard key={drink.idDrink} drink={drink} />
        ))}
      </div>}
      


    </>
  )
}
