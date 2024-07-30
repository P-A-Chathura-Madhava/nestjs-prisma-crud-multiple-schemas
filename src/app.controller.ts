import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { Computer, Prisma, User } from '@prisma/client';
import { ComputerService } from './computer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly computerService: ComputerService
  ) {}

  // User's functions
  @Get('user')
  async findAllUsers(): Promise<User[]> {
      return this.appService.findAll();
  }

  @Get('user/:id')
  async findAUser(@Param('id') id: string): Promise<User> {
    return this.appService.findOne({id: Number(id)});
  }

  @Post('user')
  async createAUser(@Body() data: {name: string}): Promise<User> {
    const {name} = data;
    return this.appService.createAUser({
      name
    });
  }

  @Patch('user/:id')
  async updateAUser(@Param('id') id: number, @Body() data: Prisma.UserUpdateInput): Promise<User> {
      return this.appService.updateAUser(id, data);
  }

  @Delete('user/:id')
  async deleteAUser(@Param('id') id: string): Promise<User> {
    return this.appService.deleteAUser({id: Number(id)})
  }

  // Computer's functions
  @Get('computer')
  async findAllComputers(): Promise<Computer[]> {
    return this.computerService.findAll();
  }

  @Get('computer/:id')
  async findAComputer(@Param('id') id: string): Promise<Computer> {
    return this.computerService.findOne({id: Number(id)});
  }

  @Post('computer')
  async createAComputer(@Body() data: {brand: string}): Promise<Computer> {
    const {brand} = data;
    return this.computerService.createAComputer({
      brand
    })
  }

  @Patch('computer/:id')
  async updateAComputer(@Param('id') id: number, @Body() data: Prisma.ComputerUpdateInput): Promise<Computer> {
      return this.computerService.updateAComputer(id, data);
  }

  @Delete('computer/:id')
  async deleteAComputer(@Param('id') id: string): Promise<Computer> {
    return this.computerService.deleteAComputer({id: Number(id)})
  }
}
