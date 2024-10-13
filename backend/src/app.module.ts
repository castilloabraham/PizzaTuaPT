import { Module } from '@nestjs/common';
import { PizzaModule } from './pizza/pizza.module';
import { IngredientInventoryModule } from './ingredient-inventory/ingredient-inventory.module';
import { RecipeInventoryModule } from './recipe-inventory/recipe-inventory.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PizzaModule, IngredientInventoryModule, RecipeInventoryModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
