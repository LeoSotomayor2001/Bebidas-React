import {z} from 'zod'
import { CategoriesApiResponseSchema, DrinksApiResponse, SearchFilterSchema } from '../utils/recipe-schemas'

export type Categories=z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter=z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksApiResponse>