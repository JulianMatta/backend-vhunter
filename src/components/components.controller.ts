import { Body, Controller, Get, Post } from '@nestjs/common';
import { ComponentsService } from './components.service';
import { Components } from './dto/components.entity';
import { CreateComponentDto } from './dto/create-components-dto';

@Controller('components')
export class ComponentsController {
    constructor(private componentService: ComponentsService) { }

    @Post()
    create(@Body() createComponentDto: CreateComponentDto) {
        return this.componentService.create(createComponentDto);
    }
    @Get('/')
    getAllComponents(): Promise<Components[]> {
        return this.componentService.getAllComponent();
    }
}