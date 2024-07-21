import {z} from 'zod'
import { CategoriesApiResponseSchema, SearchFilterSchema } from '../utils/recipe-schemas'

export type Categories=z.infer<typeof CategoriesApiResponseSchema>
export type SearchFilter=z.infer<typeof SearchFilterSchema>