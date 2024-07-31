import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice"

export type FavoriteSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void,
    favoriteExists: (id: Recipe['idDrink']) => boolean
}


export const createFavoriteSlice : StateCreator<FavoriteSliceType & RecipesSliceType,[],[], FavoriteSliceType> = (set,get,api) => ({
    favorites: [],
    handleClickFavorite: (recipe: Recipe) => {
        if(get().favoriteExists(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter((fav) => fav.idDrink !== recipe.idDrink)
            }))
        }
        else{
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        createRecipesSlice(set,get,api).CloseModal()
    },
    favoriteExists:(id)=>{
        return get().favorites.some((fav) => fav.idDrink === id)
    }
})