import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/service.prisma';
import { CreateTeachersDto } from './teachers.dto';

@Injectable()
export class TeachersService {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.teachers.findMany();
  }

  create(dto: CreateTeachersDto) {
    //TODO: fix new ID
    return this.prisma.teachers.create({
      data: dto,
    });
  }
}
