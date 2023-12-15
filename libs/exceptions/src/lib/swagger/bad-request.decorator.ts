import { applyDecorators } from '@nestjs/common';
import {
  ApiExtraModels,
  ApiBadRequestResponse,
  getSchemaPath,
} from '@nestjs/swagger';
import { BadRequestData } from '../exceptions/vo/bad-request.dto';
import { ErrorResponse } from '../vo/error-response.dto';

export const ApiBadRequest = (...errorCodes: string[]) =>
  applyDecorators(
    ApiExtraModels(BadRequestData),
    ApiBadRequestResponse({
      description: `Bad request provided by user`,
      schema: {
        allOf: [
          { $ref: getSchemaPath(ErrorResponse) },
          {
            properties: {
              data: {
                type: 'array',
                items: {
                  $ref: getSchemaPath(BadRequestData),
                },
              },
              errorCode: {
                type: 'enum',
                enum: errorCodes,
                description: 'Enum representing possible error codes',
              },
            },
          },
        ],
      },
    }),
  );
