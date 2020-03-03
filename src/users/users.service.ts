import { Inject, Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { UserInput } from './inputs/user.input';
import { Observable } from 'rxjs';
import { UsersRepository } from './users.repository';
import { map } from 'rxjs/operators';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USER_MODEL')
    private readonly userModel: Model<UserInterface>,
    private readonly usersRepository: UsersRepository
  ) {
  }
  async findAll(): Promise<UserInterface[]> {
    return this.usersRepository.findAll();
  }
  async create(createUserDto: UserInput): Promise<UserInterface>{
    return this.usersRepository.create(createUserDto);
  }
  async delete(_id: string){
    return this.usersRepository.delete(_id)
  }
  async update(user: UserInterface): Promise<UserInterface> {
   return this.usersRepository.update(user)
  }

  findObs(): Observable<any>{
   return this.usersRepository.findObs().pipe()
  }
  createObs(createUserDto: UserInput): Observable<any>{
    return this.usersRepository.createObs(createUserDto);
  }
  deleteObs(_id: string):Observable<any>{
    return this.usersRepository.deleteObs(_id)
  }
  updateObs(user: UserInterface): Observable<any> {
    return this.usersRepository.updateObs(user)
  }
}
