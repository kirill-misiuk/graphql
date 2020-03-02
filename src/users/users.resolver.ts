import { Query, Resolver } from '@nestjs/graphql';

@Resolver('Users')

export class UsersResolver {
  @Query(()=> String)
    async hello() {
    return 'hello'
    }
}
