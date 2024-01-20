import { BaseJobDefinitionEntity, JobDefinition } from '../entity';
import { BaseEntityHelper, BaseRepository } from '@softkit/typeorm';
import { BaseEntityService } from '@softkit/typeorm-service';

export abstract class AbstractJobDefinitionService<
  T extends BaseJobDefinitionEntity = JobDefinition,
  EXCLUDE_AUTOGENERATED_FIELDS extends BaseEntityHelper = BaseEntityHelper,
> extends BaseEntityService<
  T,
  'id',
  BaseRepository<T, 'id'>,
  EXCLUDE_AUTOGENERATED_FIELDS
> {}
