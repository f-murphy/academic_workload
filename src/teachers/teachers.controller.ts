import { Controller, Get, Param, UseInterceptors } from '@nestjs/common';
import { TeachersService } from './teachers.service';
import { LoggingInterceptor } from 'src/conception/interceptor';

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
}
