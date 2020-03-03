import {ObjectType,Field,Int,ID} from 'type-graphql';

@ObjectType()
export class UserTypeForUpdate{
  @Field(()=>ID)
  _id: string;
  @Field(()=>String)
  name: string;
  @Field(()=> Int)
  age: number;
}
