import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { from, Observable, of } from 'rxjs';
import { UserInterface } from './interfaces/user.interface';
import { UserInput } from './inputs/user.input';

@Injectable()
export class UsersRepository {
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
  async delete(_id: string){
    return await this.userModel.findByIdAndRemove(_id).exec()
  }
  async update(user: UserInterface): Promise<UserInterface> {
    return await this.userModel.findByIdAndUpdate(user._id, user, { new:  true   });
  }


  findObs(): Observable<any>{
    return from(this.userModel.find().exec())
  }
  createObs(createUserDto: UserInput): Observable<any>{
    return from(this.userModel.create(createUserDto))
  }
  deleteObs(_id: string):Observable<any>{
    return from(this.userModel.findByIdAndRemove(_id).exec())
  }
  updateObs(user: UserInterface): Observable<any> {
    return from(this.userModel.findByIdAndUpdate(user._id, user, { new:  true }).exec())
  }
}
