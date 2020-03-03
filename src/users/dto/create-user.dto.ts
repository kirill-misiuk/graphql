import {ObjectType,Field,Int,ID} from 'type-graphql';

@ObjectType()
export class UserType{
  @Field(()=>String)
  name: string;
  @Field(()=> Int)
  age: number;
}
