import { PartialType } from '@nestjs/mapped-types';
import { CreateRecipeInventoryDto } from './create-recipe-inventory.dto';

export class UpdateRecipeInventoryDto extends PartialType(CreateRecipeInventoryDto) {}
