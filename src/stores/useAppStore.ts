import { create } from "zustand";
import {devtools } from 'zustand/middleware'
import { createRecipesSlice, RecipesSliceType } from "./recipeSlice";
import { createFavoriteSlice, FavoriteSliceType } from "./favoriteSlice";
import { NotificationSliceType, createNotificationSlice } from "./NotificationSlice";

export const useAppStore = create<RecipesSliceType & FavoriteSliceType & NotificationSliceType>()(devtools((...a) => ({
    //esto hace que se puedan añadir slices
    ...createRecipesSlice(...a),
    ...createFavoriteSlice(...a),
    ...createNotificationSlice(...a)
})))