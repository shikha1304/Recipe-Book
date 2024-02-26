export interface Recipe{
    id: number,
    title: string,
    categoryId: string,
    ingredients: [{
        quantity: number,
        name: string,
        ingredient: string
    }
    ],
    instructions: string[],
    nutritional_information: {
        calories: string,
        protein: string,
        carbohydrates: string,
        fat: string
    }
    ,
    img: string,
    creationDate: Date,
    creatorId: number
}