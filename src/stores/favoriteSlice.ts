import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice"
import { createNotificationSlice, NotificationSliceType } from "./NotificationSlice"

export type FavoriteSliceType = {
    favorites: Recipe[],
    handleClickFavorite: (recipe: Recipe) => void,
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromStorage: () => void
}


export const createFavoriteSlice : StateCreator<FavoriteSliceType & RecipesSliceType & NotificationSliceType,[],[], FavoriteSliceType> = (set,get,api) => ({
    favorites: [],
    handleClickFavorite: (recipe: Recipe) => {
        if(get().favoriteExists(recipe.idDrink)){
            set((state) => ({
                favorites: state.favorites.filter((fav) => fav.idDrink !== recipe.idDrink)
            }))
            createNotificationSlice(set,get,api).showNotification({
                text: 'Bebida eliminada de favoritos',
                error: false
            })
        }
        else{
            set((state) => ({
                favorites: [...state.favorites, recipe]
            }))
            createNotificationSlice(set,get,api).showNotification({
                text: 'Bebida agregada a favoritos',
                error: false
            })
        }
        createRecipesSlice(set,get,api).CloseModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists:(id)=>{
        return get().favorites.some((fav) => fav.idDrink === id)
    },
    loadFromStorage: () => {
        const favorites = localStorage.getItem('favorites')
        if(favorites){
            set({
                favorites: JSON.parse(favorites)
            })
        }
    }
})