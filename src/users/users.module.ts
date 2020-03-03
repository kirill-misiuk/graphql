import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { usersProviders } from './users.providers';
import { UsersRepository } from './users.repository';

@Module({
  imports:[DatabaseModule],
  providers: [UsersResolver, UsersService,UsersRepository, ...usersProviders]
})
export class UsersModule {}
