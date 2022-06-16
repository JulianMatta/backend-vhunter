import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateVersionDto } from './dto/create-versions-dto';
import { Versions } from './dto/versions.entity';
import { VersionsRepository } from './versions.repository';

@Injectable()
export class VersionsService {
  constructor(
    @InjectRepository(VersionsRepository)
    private versionsRepository: VersionsRepository,
  ) {}

  create(createVersionDto: CreateVersionDto): Promise<Versions> {
    return this.versionsRepository.createVersion(createVersionDto);
  }

  async getAllVersions(): Promise<Versions[]> {
    const found = await this.versionsRepository.find();
    if (!found) {
      throw new NotFoundException(`Versions 'NOT FOUND`);
    }

    return found;
  }
}
