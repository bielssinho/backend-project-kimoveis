import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { ICategory, ICreateCategory } from "../../interfaces/category.interfaces";
import { returnCategorySchema } from "../../schemas/category.schemas";


const createCategoryService = async (categoryData: ICreateCategory): Promise<ICategory> => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory = await categoryRepository.findOne({
        where: {
            name: categoryData.name
        }
    })

    if(findCategory){
        throw new AppError('Category already exists', 409)
    }

    const category: Category = categoryRepository.create(categoryData)

    await categoryRepository.save(category)

    const newCategory = returnCategorySchema.parse(category)

    return newCategory

}

export default createCategoryService