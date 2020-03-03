import { Mutation, Query, Resolver,Args } from '@nestjs/graphql';
import {  UserType } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserInput } from './inputs/user.input';
@Resolver(UserType)

export class UsersResolver {
  constructor(private readonly usersService: UsersService) {
  }

  @Query(() => String)
  async hello() {
    return 'hello'
  }
  @Query(() => [UserType])
  async read() {
    return this.usersService.findAll()
  }

  @Mutation(() => UserType)
  async create(@Args('input') input: UserInput): Promise<UserInput> {
    return this.usersService.create(input)
  }
  @Mutation(()=>UserType)
  async delete(@Args('_id') _id: string) :Promise<UserInput>{
    return this.usersService.delete(_id)
  }
  @Mutation(() =>   UserType)
  async update(@Args('input') input: UserInput):Promise<UserInput> {
    return this.usersService.update(input);
  }
}
