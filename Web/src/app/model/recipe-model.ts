export class Recipe{
    recipeId!: number;
    recipeName!: string;
    categoryId!: number;
    ingredients!: any[];
    instructions!: string;
    nutrinitionalInfo !: string;
    image !: ImageData;
    creationDate !: Date;
    creatorId !: number;
}