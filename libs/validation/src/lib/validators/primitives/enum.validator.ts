import { IS_ENUM, IsEnum, isEnum, ValidationOptions } from 'class-validator';
import { applyDecorators } from '@nestjs/common';
import { IValidatorDefinition } from './validator-definition.interface';
import { i18n } from '../../utils';

export const IsStringEnumLocalized = (
  enumType: object | string[],
  validationOptions: ValidationOptions = {},
) => {
  return applyDecorators(
    IsEnum(enumType, {
      message: i18n('validation.STRING_ENUM'),
      ...validationOptions,
    }),
  );
};

export const IsEnumValidatorDefinition = {
  name: IS_ENUM,
  validator: isEnum,
  defaultValidationMessage: 'validation.STRING_ENUM',
  decorator: IsStringEnumLocalized,
} satisfies IValidatorDefinition<unknown, object>;
