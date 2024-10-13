import { Injectable } from '@nestjs/common';
import { CreateRecipeInventoryDto } from './dto/create-recipe-inventory.dto';
import { UpdateRecipeInventoryDto } from './dto/update-recipe-inventory.dto';

@Injectable()
export class RecipeInventoryService {
  create(createRecipeInventoryDto: CreateRecipeInventoryDto) {
    return 'This action adds a new recipeInventory';
  }

  findAll() {
    return `This action returns all recipeInventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recipeInventory`;
  }

  update(id: number, updateRecipeInventoryDto: UpdateRecipeInventoryDto) {
    return `This action updates a #${id} recipeInventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} recipeInventory`;
  }
}
