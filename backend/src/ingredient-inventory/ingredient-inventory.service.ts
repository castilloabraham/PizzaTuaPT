import { Injectable } from '@nestjs/common';
import { CreateIngredientInventoryDto } from './dto/create-ingredient-inventory.dto';
import { UpdateIngredientInventoryDto } from './dto/update-ingredient-inventory.dto';

@Injectable()
export class IngredientInventoryService {
  create(createIngredientInventoryDto: CreateIngredientInventoryDto) {
    return 'This action adds a new ingredientInventory';
  }

  findAll() {
    return `This action returns all ingredientInventory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ingredientInventory`;
  }

  update(id: number, updateIngredientInventoryDto: UpdateIngredientInventoryDto) {
    return `This action updates a #${id} ingredientInventory`;
  }

  remove(id: number) {
    return `This action removes a #${id} ingredientInventory`;
  }
}
