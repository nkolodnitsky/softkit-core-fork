import { HttpStatus } from '@nestjs/common';
import { AbstractHttpException } from './abstract-http.exception';
import { i18nString } from '../utils';

export class GeneralForbiddenException extends AbstractHttpException {
  constructor(rootCause?: unknown) {
    super(
      i18nString('exception.FORBIDDEN.TITLE'),
      i18nString('exception.FORBIDDEN.GENERAL_DETAIL'),
      HttpStatus.FORBIDDEN,
      undefined,
      rootCause,
    );
  }
}
