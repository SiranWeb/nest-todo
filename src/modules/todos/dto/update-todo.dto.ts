import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';

export class UpdateTodoDto {
  @ApiProperty({
    required: false,
  })
  @IsString()
  @IsOptional()
  title: string;

  @ApiProperty({
    required: false,
  })
  @IsNumber()
  @IsOptional()
  level: number;

  @ApiProperty({
    required: false,
  })
  @IsBoolean()
  @IsOptional()
  done: boolean;
}
