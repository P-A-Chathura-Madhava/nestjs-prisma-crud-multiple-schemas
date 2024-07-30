import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Computer, Prisma, User } from '@prisma/client';

@Injectable()
export class ComputerService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Computer[]> {
    return this.prisma.computer.findMany();
  }

  async findOne(id: Prisma.ComputerWhereUniqueInput): Promise<Computer | null> {
    return this.prisma.computer.findUnique({
      where: id
    })
  }

  async createAComputer(data: Prisma.ComputerCreateInput): Promise<Computer> {
    return this.prisma.computer.create({
        data
    });
  }

  async updateAComputer(id: number, data: Prisma.ComputerUpdateInput): Promise<Computer> {
    return this.prisma.computer.update({
        where: {id: Number(id)},
        data: {brand: data.brand}
    });
  }

  async deleteAComputer(where: Prisma.ComputerWhereUniqueInput): Promise<Computer> {
    return this.prisma.computer.delete({
      where
    })
  }
}
