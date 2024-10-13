import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecipeInventoryService } from './recipe-inventory.service';
import { CreateRecipeInventoryDto } from './dto/create-recipe-inventory.dto';
import { UpdateRecipeInventoryDto } from './dto/update-recipe-inventory.dto';

@Controller('recipe-inventory')
export class RecipeInventoryController {
  constructor(private readonly recipeInventoryService: RecipeInventoryService) {}

  @Post()
  create(@Body() createRecipeInventoryDto: CreateRecipeInventoryDto) {
    return this.recipeInventoryService.create(createRecipeInventoryDto);
  }

  @Get()
  findAll() {
    return this.recipeInventoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recipeInventoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecipeInventoryDto: UpdateRecipeInventoryDto) {
    return this.recipeInventoryService.update(+id, updateRecipeInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recipeInventoryService.remove(+id);
  }
}
