import { Test, TestingModule } from '@nestjs/testing';
import { RecipeInventoryService } from './recipe-inventory.service';

describe('RecipeInventoryService', () => {
  let service: RecipeInventoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecipeInventoryService],
    }).compile();

    service = module.get<RecipeInventoryService>(RecipeInventoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
