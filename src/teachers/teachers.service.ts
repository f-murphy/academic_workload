import { Injectable } from '@nestjs/common';

@Injectable()
export class TeachersService {
  findAll() {
    return [
      {
        Код_преподавателя: '1',
        Фамилия: 'Козлов',
        Имя: 'Александр',
        Отчество: 'Александрович',
      },
      {
        Код_преподавателя: '2',
        Фамилия: 'Скоромник',
        Имя: 'Оксана',
        Отчество: 'Валерьевна',
      },
    ];
  }
}
