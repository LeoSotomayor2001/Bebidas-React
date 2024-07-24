import { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/RecipeService"
import { Categories, Drink, Drinks, Recipe } from "../types"
import { SearchFilter } from '../types/index';

export type RecipesSliceType = {
    categories: Categories
    drinks : Drinks
    modal: boolean
    selectedRecipe: Recipe
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
    selectRecipe: (id: Drink['idDrink']) => Promise<void>
    CloseModal: () => void
}
export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    drinks: {
        drinks: []
    },
    selectedRecipe: {} as Recipe,
    modal: false,
    fetchCategories: async () => {
       const categories=await getCategories()
       set({
         categories
       })
    },
    searchRecipes: async (filters) => {
        const drinks=await getRecipes(filters)
        set({
            drinks
        })
    },
    selectRecipe: async(id) => {  
        const selectedRecipe = await getRecipeById(id)
        set({
            selectedRecipe,
            modal: true
        })
    },
    CloseModal: () => {
        set({
            modal: false,
            selectedRecipe: {} as Recipe
        })
    }

})