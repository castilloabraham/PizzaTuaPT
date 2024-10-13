import { PartialType } from '@nestjs/mapped-types';
import { CreateIngredientInventoryDto } from './create-ingredient-inventory.dto';

export class UpdateIngredientInventoryDto extends PartialType(CreateIngredientInventoryDto) {}
