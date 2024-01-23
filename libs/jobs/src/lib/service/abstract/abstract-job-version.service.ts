import { BaseEntityHelper, BaseRepository } from '@softkit/typeorm';
import { BaseEntityService } from '@softkit/typeorm-service';
import { BaseJobVersion, JobVersion } from '../../entity';

export abstract class AbstractJobVersionService<
  T extends BaseJobVersion = JobVersion,
  FIELDS_REQUIRED_FOR_UPDATE = Pick<T, 'id'>,
  EXCLUDE_AUTOGENERATED_FIELDS extends BaseEntityHelper = BaseEntityHelper,
> extends BaseEntityService<
  T,
  'id',
  BaseRepository<T, 'id'>,
  FIELDS_REQUIRED_FOR_UPDATE,
  EXCLUDE_AUTOGENERATED_FIELDS
> {
  public abstract findJobVersionByJobDefinitionIdAndVersion(
    jobDefinitionId: string,
    jobVersion: number,
  ): Promise<BaseJobVersion | undefined>;

  public abstract findPreviousJobVersion(
    jobDefinitionId: string,
    newJobVersion: number,
  ): Promise<BaseJobVersion | undefined>;

  public abstract findLatestJobVersion(
    jobDefinitionId: string,
  ): Promise<BaseJobVersion>;
}
