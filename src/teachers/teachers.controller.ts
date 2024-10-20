import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { LoggingInterceptor } from 'src/conception/interceptor';
import { AuthGuard } from 'src/conception/guard';
import { CreateTeachersDto } from './teachers.dto';

@Controller('teachers')
export class TeachersController {
  constructor(private readonly teachersService: TeachersService) {}

  @Get()
  // @UseGuards(AuthGuard)
  @UseInterceptors(LoggingInterceptor)
  findAll() {
    console.log('find all');

    return this.teachersService.findAll();
  }

  @Get(':id')
  findById(@Param() params: any) {
    console.log('find by id');
    console.log(params.id);

    return this.teachersService.findAll();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  @UseGuards(AuthGuard)
  create(@Body() dto: CreateTeachersDto) {
    return this.teachersService.create(dto);
  }
}
