import { Repository } from 'typeorm'
import { AppDataSource } from '../../data-source'
import { Category } from '../../entities'
import { AppError } from '../../errors'


const readCategoryWithRealEstateByIdService = async (categoryId: number) => {

    const categoryRepository: Repository<Category> = AppDataSource.getRepository(Category)

    const findCategory = await categoryRepository.findOneBy({
        id: categoryId
    })

    if(!findCategory){
        throw new AppError('Category not found', 404)
    }

    const categoryWithRealEstate = categoryRepository.createQueryBuilder('category').
    select(['category', 'real_estate']).
    innerJoin('category.realEstate', 'real_estate').
    where('category.id = :id', { id: categoryId }).
    andWhere('real_estate.category = :id', { id: categoryId }).
    getOne()


    return categoryWithRealEstate
}

export default readCategoryWithRealEstateByIdService