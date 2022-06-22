/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ComponentsModule } from './components/components.module';
import { VersionsModule } from './versions/versions.module';
import { Products } from './products/products.entity';
import { Components } from './components/dto/components.entity';
import { Versions } from './versions/dto/versions.entity';

@Module({
  imports: [
    ProductsModule,
    ComponentsModule,
    VersionsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'mysql-81017-0.cloudclusters.net',
      port: 18422,
      username: 'admin',
      password: '3SbH2jJT',
      database: 'vhunter',
      autoLoadEntities: true,
      entities: [Products, Components, Versions],
      synchronize: true,
    }),
  ],
})
export class AppModule { }
