import { IsStringLocalized } from '@softkit/validation';
import { IsOptional } from 'class-validator';

export class MessageContentDto {
  @IsStringLocalized()
  @IsOptional()
  text?: string;

  @IsStringLocalized()
  @IsOptional()
  html?: string;

  @IsStringLocalized()
  @IsOptional()
  message?: string;

  @IsStringLocalized()
  @IsOptional()
  templateId?: string;
}
