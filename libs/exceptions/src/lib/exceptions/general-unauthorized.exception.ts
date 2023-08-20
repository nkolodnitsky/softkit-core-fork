import { HttpStatus } from '@nestjs/common';
import { AbstractHttpException } from './abstract-http.exception';
import { i18nString } from '../utils';

export class GeneralUnauthorizedException extends AbstractHttpException {
  constructor(rootCause?: unknown) {
    super(
      i18nString('exception.UNAUTHORIZED.TITLE'),
      i18nString('exception.UNAUTHORIZED.GENERAL_DETAIL'),
      HttpStatus.UNAUTHORIZED,
      undefined,
      rootCause,
    );
  }
}
