import axios from "axios"
import { CategoriesApiResponseSchema } from "../utils/recipe-schemas"
export async function getCategories() {
    const url='https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    const data = await axios.get(url)
    const result=CategoriesApiResponseSchema.safeParse(data.data)

    if(result.success){
        return result.data
    }
}