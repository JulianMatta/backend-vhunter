import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { ComponentsModule } from './components/components.module';
import { VersionsModule } from './versions/versions.module';
import { Products } from './products/products.entity';
import { Components } from './components/dto/components.entity';
import { Versions } from './versions/dto/versions.entity';
import { ScrapperModule } from './scrapper/scrapper.module';
import { ScheduleModule } from '@nestjs/schedule';
import { CrawlerModule } from './crawler/crawler.module';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/dto/user.entity';
import { VhunterController } from './vhunter/vhunter.controller';

@Module({
  imports: [
    ProductsModule,
    ComponentsModule,
    VersionsModule,
    ScrapperModule,
    CrawlerModule,
    AuthModule,
    ScheduleModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'ec2-34-239-241-121.compute-1.amazonaws.com',
      port: 5432,
      username: 'mwgqugodjqgolb',
      password: '1314a72e90bd34c262fc6641eb001c5a6093e454272c7632df80ead03f43292d',
      database: 'd2r75rditjarsi',
      autoLoadEntities: true,
      entities: [Products, Components, Versions, User],
      synchronize: true,
    }),
  ],
  controllers: [VhunterController],
})
export class AppModule { }
