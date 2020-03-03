import {InputType,Field,Int} from 'type-graphql';

@InputType()
export class UserInput{
  @Field(()=>String )
  name: string;
  @Field(()=> Int)
  age: number;
}
