import {
  Injectable,
  NotFoundException,
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CreatePizzaDto } from './dto/create-pizza.dto';
import { UpdatePizzaDto } from './dto/update-pizza.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PizzaService {

  constructor(private prismaService: PrismaService){}

  //Metodo para crear una pizza nueva
  async create(createPizzaDto: CreatePizzaDto) {
    try {
      return this.prismaService.pizza.create({
        data: createPizzaDto
      })
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new ConflictException(
            `Product with name ${createPizzaDto.name} already exists`,
          );
        }
      }

      throw new InternalServerErrorException();
    }
  }

  //Metodo para obtener todas las pizzas
  findAll() {
    return this.prismaService.pizza.findMany()
  }

  //Metodo para obtener una pizza por id
  async findOne(id: number) {
    const pizzaFound = await this.prismaService.pizza.findUnique({
      where: {
        id: id,
      },
    });

    if (!pizzaFound) {
      throw new NotFoundException(`Pizza with id ${id} not found`);
    }

    return pizzaFound;
  }

  //Metodo para actualizar datos de la pizza
  async update(id: number, updatePizzaDto: UpdatePizzaDto) {
    const pizzaFound = await this.prismaService.pizza.update({
      where: {
        id,
      },
      data: updatePizzaDto,
    });

    if (!pizzaFound) {
      throw new NotFoundException(`Pizza with id ${id} not found`);
    }

    return pizzaFound;
  }

  //Metodo para eliminar una pizza
  async remove(id: number) {
    const deletedPizza = await this.prismaService.pizza.delete({
      where: {
        id,
      },
    });

    if (!deletedPizza) {
      throw new NotFoundException(`Pizza with id ${id} not found`);
    }

    return deletedPizza;
  }
}
