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
      host: 'sql10.freemysqlhosting.net',
      port: 3306,
      username: 'sql10499947',
      password: 'bXcoZl5OojEyahty',
      database: 'sql10499947',
      autoLoadEntities: true,
      entities: [Products, Components, Versions],
      synchronize: true,
    }),
  ],
})
export class AppModule { }
