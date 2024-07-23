import {z} from 'zod'
import { CategoriesApiResponseSchema, DrinkApiResponse, DrinksApiResponse, SearchFilterSchema } from '../utils/recipe-schemas'

export type Categories=z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter=z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksApiResponse>
export type Drink = z.infer<typeof DrinkApiResponse>