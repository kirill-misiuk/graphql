import {ObjectType,Field,Int,ID} from 'type-graphql';

@ObjectType()
export class UserType{
 @Field(()=>ID)
  _id: string;
  @Field(()=>String)
  name: string;
  @Field(()=> Int)
  age: number;
}
