import { Repository } from 'typeorm';
import { CustomRepository } from '../databaseCustomRepository/typeorm-ex.decorator';
import { Components } from './dto/components.entity';
import { CreateComponentDto } from './dto/create-components-dto';


@CustomRepository(Components)
export class ComponentsRepository extends Repository<Components> {
    async createComponent(createComponentDto: CreateComponentDto): Promise<Components> {
        const { productID,
            componentName,
            componentType,
            versionURL,
            releaseURL,
            crawlerTime,
            componentCreateUser,
            componentUpdateUser,
            componentStatus } = createComponentDto;

        const crawlerLastCheck = new Date()
        const componentCreateDate = new Date()
        const componentUpdateDate = new Date()

        const component = this.create({
            productID,
            componentName,
            componentType,
            versionURL,
            releaseURL,
            crawlerTime,
            crawlerLastCheck,
            componentCreateDate,
            componentCreateUser,
            componentUpdateDate,
            componentUpdateUser,
            componentStatus
        });

        await this.save(component);
        return component;
    }
}
