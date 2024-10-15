import { Test, TestingModule } from '@nestjs/testing';
import { IngredientInventoryService } from './ingredient-inventory.service';

describe('IngredientInventoryService', () => {
  let service: IngredientInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IngredientInventoryService],
    }).compile();

    service = module.get<IngredientInventoryService>(IngredientInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
