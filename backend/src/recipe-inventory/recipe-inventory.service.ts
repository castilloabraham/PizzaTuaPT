import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateRecipeInventoryDto } from './dto/create-recipe-inventory.dto';
import { UpdateRecipeInventoryDto } from './dto/update-recipe-inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class RecipeInventoryService {
  
  constructor(private prismaService: PrismaService){}

  async create(createRecipeInventoryDto: CreateRecipeInventoryDto) {
    try {
      return this.prismaService.recipeInventory.create({
        data: createRecipeInventoryDto
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            `Recipe Inventory ${createRecipeInventoryDto} already exists`,
          );
        }
      }

      throw new InternalServerErrorException();
    }
  }

  findAll() {
    return this.prismaService.recipeInventory.findMany()
  }

  async findOne(id: number) {
    const RecipeInventoryFound = await this.prismaService.recipeInventory.findUnique({
      where: {
        id: id,
      },
    });

    if (!RecipeInventoryFound) {
      throw new NotFoundException(`Recipe Inventory with id ${id} not found`);
    }

    return RecipeInventoryFound;
  }

  async update(id: number, updateRecipeInventoryDto: UpdateRecipeInventoryDto) {
    const RecipeInventoryFound = await this.prismaService.recipeInventory.update({
      where: {
        id,
      },
      data: updateRecipeInventoryDto,
    });

    if (!RecipeInventoryFound) {
      throw new NotFoundException(`Recipe Inventory with id ${id} not found`);
    }

    return RecipeInventoryFound;
  }

  async remove(id: number) {
    const deletedRecipeInventory = await this.prismaService.recipeInventory.delete({
      where: {
        id,
      },
    });

    if (!deletedRecipeInventory) {
      throw new NotFoundException(`Recipe Inventory with id ${id} not found`);
    }

    return deletedRecipeInventory;
  }
}
