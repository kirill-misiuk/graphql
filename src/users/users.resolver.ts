import { Mutation, Query, Resolver,Args } from '@nestjs/graphql';
import {  UserType } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserInput } from './inputs/user.input';
@Resolver( of=> UserType)

export class UsersResolver {
  constructor(private readonly usersService: UsersService) {
  }

  @Query(() => String)
  async hello() {
    return 'hello'
  }

  @Query(() => [UserType])
  async users() {
    return this.usersService.findAll()
  }

  @Mutation(() => UserType)
  async create(@Args('input') input: UserInput): Promise<UserInput> {
    return this.usersService.create(input)
  }
}
