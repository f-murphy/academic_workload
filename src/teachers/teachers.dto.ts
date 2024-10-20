import { IsNumber, IsString } from 'class-validator';

export class CreateTeachersDto {
  @IsNumber()
  ID: number;

  @IsString()
  Surname: string;

  @IsString()
  FirstName: string;

  @IsString()
  MiddleName: string;

  @IsString()
  Academic_degree: string;

  @IsString()
  JobTitle: string;

  @IsNumber()
  Experience: number;
}

export type UpdateTeachersDto = Partial<CreateTeachersDto>;
