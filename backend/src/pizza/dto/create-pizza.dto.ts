//export class CreatePizzaDto {}

import {Pizza} from '@prisma/client'

export type CreatePizzaDto = Omit<Pizza, 'id' | 'createdAt' | 'updatedAt'>