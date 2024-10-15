import { Test, TestingModule } from '@nestjs/testing';
import { RecipeInventoryController } from './recipe-inventory.controller';
import { RecipeInventoryService } from './recipe-inventory.service';

describe('RecipeInventoryController', () => {
  let controller: RecipeInventoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecipeInventoryController],
      providers: [RecipeInventoryService],
    }).compile();

    controller = module.get<RecipeInventoryController>(RecipeInventoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
