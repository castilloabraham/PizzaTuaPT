//export class CreateRecipeInventoryDto {}

import {RecipeInventory} from '@prisma/client'

export type CreateRecipeInventoryDto = Omit<RecipeInventory, 'id' | 'createdAt' | 'updatedAt'>