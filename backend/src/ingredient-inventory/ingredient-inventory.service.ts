import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreateIngredientInventoryDto } from './dto/create-ingredient-inventory.dto';
import { UpdateIngredientInventoryDto } from './dto/update-ingredient-inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class IngredientInventoryService {

  constructor(private prismaService: PrismaService){}

  //Metodo para crear un ingrediente nuevo
  async create(createIngredientInventoryDto: CreateIngredientInventoryDto) {
    try {
      return this.prismaService.ingredientInventory.create({
        data: createIngredientInventoryDto
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            `Product with name ${createIngredientInventoryDto.name} already exists`,
          );
        }
      }

      throw new InternalServerErrorException();
    }
  }

  //Metodo para obtener todos los ingredientes
  findAll() {
    return this.prismaService.ingredientInventory.findMany()
  }

  //Metodo para obtener un ingrediente por id
  async findOne(id: number) {
    const ingredientInventoryFound = await this.prismaService.ingredientInventory.findUnique({
      where: {
        id: id,
      },
    });

    if (!ingredientInventoryFound) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }

    return ingredientInventoryFound;
  }

  //Metodo para actualizar datos del ingrediente
  async update(id: number, updateIngredientInventoryDto: UpdateIngredientInventoryDto) {
    const ingredientInventoryFound = await this.prismaService.ingredientInventory.update({
      where: {
        id,
      },
      data: updateIngredientInventoryDto,
    });

    if (!ingredientInventoryFound) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }

    return ingredientInventoryFound;
  }

  //Metodo para eliminar un ingrediente
  async remove(id: number) {
    const deletedIngredientInventory = await this.prismaService.ingredientInventory.delete({
      where: {
        id,
      },
    });

    if (!deletedIngredientInventory) {
      throw new NotFoundException(`Ingredient with id ${id} not found`);
    }

    return deletedIngredientInventory;
  }
}
