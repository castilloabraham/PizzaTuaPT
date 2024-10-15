import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { IngredientInventoryService } from './ingredient-inventory.service';
import { CreateIngredientInventoryDto } from './dto/create-ingredient-inventory.dto';
import { UpdateIngredientInventoryDto } from './dto/update-ingredient-inventory.dto';

@Controller('ingredient-inventory')
export class IngredientInventoryController {
  constructor(private readonly ingredientInventoryService: IngredientInventoryService) {}

  @Post()
  create(@Body() createIngredientInventoryDto: CreateIngredientInventoryDto) {
    return this.ingredientInventoryService.create(createIngredientInventoryDto);
  }

  @Get()
  findAll() {
    return this.ingredientInventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingredientInventoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateIngredientInventoryDto: UpdateIngredientInventoryDto) {
    return this.ingredientInventoryService.update(+id, updateIngredientInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingredientInventoryService.remove(+id);
  }
}
