import {InputType,Field,Int,ID} from 'type-graphql';

@InputType()
export class UserInput{
  @Field(()=>ID)
  _id: string;
  @Field(()=>String )
  name: string;
  @Field(()=> Int)
  age: number;
}
