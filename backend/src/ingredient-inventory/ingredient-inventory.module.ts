import { Module } from '@nestjs/common';
import { IngredientInventoryService } from './ingredient-inventory.service';
import { IngredientInventoryController } from './ingredient-inventory.controller';

@Module({
  controllers: [IngredientInventoryController],
  providers: [IngredientInventoryService],
})
export class IngredientInventoryModule {}
