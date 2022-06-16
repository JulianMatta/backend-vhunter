import { Module } from '@nestjs/common';
import { TypeOrmExModule } from 'src/databaseCustomRepository/typeorm-ex.module';
import { ComponentsController } from './components.controller';
import { ComponentsRepository } from './components.repository';
import { ComponentsService } from './components.service';

@Module({
  imports: [TypeOrmExModule.forCustomRepository([ComponentsRepository])],
  controllers: [ComponentsController],
  providers: [ComponentsService],
})
export class ComponentsModule {}
