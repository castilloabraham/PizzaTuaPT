import { Test, TestingModule } from '@nestjs/testing';
import { IngredientInventoryController } from './ingredient-inventory.controller';
import { IngredientInventoryService } from './ingredient-inventory.service';

describe('IngredientInventoryController', () => {
  let controller: IngredientInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IngredientInventoryController],
      providers: [IngredientInventoryService],
    }).compile();

    controller = module.get<IngredientInventoryController>(IngredientInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
