import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TeachersModule } from './teachers/teachers.module';
import { LoggerMiddleware } from './conception/middleware';

@Module({
  imports: [TeachersModule],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('teachers');
  }
}
