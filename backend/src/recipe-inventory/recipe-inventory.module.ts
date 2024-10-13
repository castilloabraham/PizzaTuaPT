import { Module } from '@nestjs/common';
import { RecipeInventoryService } from './recipe-inventory.service';
import { RecipeInventoryController } from './recipe-inventory.controller';

@Module({
  controllers: [RecipeInventoryController],
  providers: [RecipeInventoryService],
})
export class RecipeInventoryModule {}
