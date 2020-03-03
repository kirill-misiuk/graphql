import {InputType,Field,Int,ID} from 'type-graphql';

@InputType()
export class UserUpdate{
  @Field(()=>ID)
  _id: string;
  @Field(()=>String )
  name: string;
  @Field(()=> Int)
  age: number;
}
