import { Mutation, Query, Resolver,Args } from '@nestjs/graphql';
import {  UserType } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UserInput } from './inputs/user.input';
import { Observable } from 'rxjs';
import { UserTypeForUpdate } from './dto/update-user.dtp';
import { UserUpdate } from './inputs/user.update';
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
  async update(@Args('input') input: UserUpdate):Promise<UserInput> {
    return this.usersService.update(input);
  }

  @Query(() => [UserType])
  readObs():Observable<UserInput> {
    return this.usersService.findObs()
  }
  @Mutation(() => UserType)
   createObs(@Args('input') input: UserInput):Observable<UserInput> {
    return this.usersService.createObs(input)
  }
  @Mutation(()=>UserType)
   deleteObs(@Args('_id') _id: string):Observable<UserInput>{
    return this.usersService.deleteObs(_id)
  }
  @Mutation(() =>   UserTypeForUpdate)
   updateObs(@Args('input') input: UserUpdate):Observable<UserInput> {
    return this.usersService.updateObs(input);
  }
}
