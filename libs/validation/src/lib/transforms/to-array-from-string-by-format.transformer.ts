import { plainToClass, TransformFnParams } from 'class-transformer';
import { ClassConstructor } from 'class-transformer/types/interfaces';
import { validateAndThrow } from '../validators/primitives/utils';
import { IsEnumValidatorDefinition } from '../validators';

export const toObjectsArrayFromString = <T>(
  params: TransformFnParams,
  keys: Array<keyof T>,
  constr: ClassConstructor<T>,
  keysValues: string[],
  objectsSeparator = ',',
  valuesSeparator = ':',
) => {
  const value = params.value;

  if (value === undefined) {
    /**
     * there is no real circumstance where this would happen, because it used for query params
     * and it there is not query params class-validator not invoking this
     */
    /* istanbul ignore next */
    return;
  }

  if (typeof value !== 'string') {
    /**
     * there is no real circumstance where this would happen, because it used for query params
     */
    /* istanbul ignore next */
    return {};
  }

  return value.split(objectsSeparator).map((v) => {
    const values = v.split(valuesSeparator);

    // eslint-disable-next-line unicorn/no-array-reduce
    const record = values.reduce(
      (acc, curr, index) => {
        // eslint-disable-next-line security/detect-object-injection
        const keyName = keys[index];

        validateAndThrow(
          IsEnumValidatorDefinition,
          params.key,
          keyName?.toString(),
          keysValues,
        );

        // eslint-disable-next-line security/detect-object-injection
        acc[keyName] = curr;
        return acc;
      },
      // unknown is used here because we can extend this in future to do a conversion
      {} as Record<keyof T, unknown>,
    );
    return plainToClass(constr, record);
  });
};