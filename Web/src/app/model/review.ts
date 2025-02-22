export interface Review{
    id: number,
    creatorId: number,
    recipeId: number,
    rating: number,
    comment: string,
    date: Date
}