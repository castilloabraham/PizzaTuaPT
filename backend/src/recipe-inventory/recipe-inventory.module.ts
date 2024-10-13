import { Module } from '@nestjs/common';
import { RecipeInventoryService } from './recipe-inventory.service';
import { RecipeInventoryController } from './recipe-inventory.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [RecipeInventoryController],
  providers: [RecipeInventoryService, PrismaService],
})
export class RecipeInventoryModule {}
