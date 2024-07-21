import { StateCreator } from "zustand"
import { getCategories } from "../services/RecipeService"
import { Categories } from "../types"
import { SearchFilter } from '../types/index';

export type RecipesSliceType = {
    categories: Categories
    fetchCategories: () => Promise<void>
    searchRecipes: (searchFilters: SearchFilter) => Promise<void>
}
export const createRecipesSlice : StateCreator<RecipesSliceType> = (set) => ({
    categories: {
        drinks: []
    },
    fetchCategories: async () => {
       const categories=await getCategories()
       set({
         categories
       })
    },
    searchRecipes: async (filters) => {

    }
})