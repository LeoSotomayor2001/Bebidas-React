import {z} from 'zod'
import { CategoriesApiResponseSchema } from '../utils/recipe-schemas'

export type Categories=z.infer<typeof CategoriesApiResponseSchema>