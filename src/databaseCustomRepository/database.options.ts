import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { Products } from 'src/products/products.entity';
import { Components } from 'src/components/dto/components.entity';
import { Versions } from 'src/versions/dto/versions.entity';
@Injectable()
export class DatabaseOptions implements TypeOrmOptionsFactory {
  public createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      entities: [Products, Components, Versions],
    };
  }
}
