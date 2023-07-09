import { Controller, Get } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get('courses')
  findAll() {
    return 'Listagem de cursos';
  }
}
