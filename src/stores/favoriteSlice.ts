import { StateCreator } from "zustand"
import { Recipe } from "../types"

export type FavoriteSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void
}


export const createFavoriteSlice : StateCreator<FavoriteSliceType> = (set,get) => ({
    favorites: [],
    handleClickFavorite: (recipe: Recipe) => {
        if(get().favorites.some((fav) => fav.idDrink === recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter((fav) => fav.idDrink !== recipe.idDrink)
            }))
        }
        else{
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }

    }
})