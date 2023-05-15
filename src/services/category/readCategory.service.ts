import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { ICategory } from "../../interfaces/category.interfaces";
import { returnMultiCategorySchema } from "../../schemas/category.schemas";


const readCategoryService = async (): Promise<ICategory[]> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const categorys: Category[] = await categoryRepository.find()

    const listCategory = returnMultiCategorySchema.parse(categorys)

    return listCategory

}

export default readCategoryService