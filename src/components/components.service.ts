import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComponentsRepository } from './components.repository';
import { Components } from './dto/components.entity';
import { CreateComponentDto } from './dto/create-components-dto';



@Injectable()
export class ComponentsService {
  constructor(
    @InjectRepository(ComponentsRepository)
    private componentsRepository: ComponentsRepository,
  ) { }

  create(createComponentDto: CreateComponentDto): Promise<Components> {
    return this.componentsRepository.createComponent(createComponentDto);
  }

  async getAllComponent(): Promise<Components[]> {
    const found = await this.componentsRepository.find();
    if (!found) {
      throw new NotFoundException(`PRODUCTS 'NOT FOUND`);
    }

    return found;
  }
}
