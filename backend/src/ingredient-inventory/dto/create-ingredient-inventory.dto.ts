//export class CreateIngredientInventoryDto {}


import {IngredientInventory} from '@prisma/client'

export type CreateIngredientInventoryDto = Omit<IngredientInventory, 'id' | 'createdAt' | 'updatedAt'>