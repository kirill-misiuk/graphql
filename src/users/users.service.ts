import { Inject, Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { UserInput } from './inputs/user.input';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<UserInterface>) {
  }

  async findAll(): Promise<UserInterface[]> {
    return await this.userModel.find().exec();
  }

  async create(createUserDto: UserInput): Promise<UserInterface>{
    const createdItem = new this.userModel(createUserDto);
    return createdItem.save();
  }
}
