import { Prisma } from '.prisma/client';
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { OrderByParams } from '../graphql';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(createUserInput: Prisma.UserCreateInput) {
    return 'This action adds a new user';
  }

  findAll(orderBy?: OrderByParams) {
    const { field = 'id', direction = 'desc' } = orderBy || {};

    return this.prisma.user.findMany({
      orderBy: {
        [field]: direction,
      }
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
