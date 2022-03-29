import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserCreateInput } from '../@generated/prisma-nestjs-graphql/user/user-create.input';
import { UsersService } from './users.service';
import { OrderByParams } from '../graphql';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('createUser')
  create(@Args('createUserInput') createUserInput: UserCreateInput) {
    return this.usersService.create(createUserInput);
  }

  @Query('users')
  findAll(
      @Args('orderBy')
      orderBy?: OrderByParams
  ) {
    console.log('users.resolver.users');
    return this.usersService.findAll(orderBy);
  }

  @Query('user')
  findOne(@Args('id') id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation('removeUser')
  remove(@Args('id') id: number) {
    return this.usersService.remove(id);
  }
}
