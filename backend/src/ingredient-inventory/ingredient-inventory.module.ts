import { Module } from '@nestjs/common';
import { IngredientInventoryService } from './ingredient-inventory.service';
import { IngredientInventoryController } from './ingredient-inventory.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [IngredientInventoryController],
  providers: [IngredientInventoryService, PrismaService],
})
export class IngredientInventoryModule {}
