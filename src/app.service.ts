import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  async findOne(id: Prisma.UserWhereUniqueInput): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: id
    })
  }

  async createAUser(data: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({
        data
    });
  }

  async updateAUser(id: number, data: Prisma.UserUpdateInput): Promise<User> {
    return this.prisma.user.update({
        where: {id: Number(id)},
        data: {name: data.name}
    });
  }

  async deleteAUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where
    })
  }
}
