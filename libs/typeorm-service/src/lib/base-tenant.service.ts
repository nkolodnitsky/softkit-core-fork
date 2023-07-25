import { BaseTenantEntityHelper, BaseTenantRepository } from "@saas-buildkit/typeorm";
import { BaseEntityService } from "./base.service";

export class BaseTenantEntityService<
  ENTITY extends BaseTenantEntityHelper,
  REPOSITORY extends BaseTenantRepository<ENTITY>,
  EXCLUDE_AUTOGENERATED_FIELDS extends
    BaseTenantEntityHelper = BaseTenantEntityHelper,
> extends BaseEntityService<ENTITY, REPOSITORY, EXCLUDE_AUTOGENERATED_FIELDS> {
  /* istanbul ignore next */
  constructor(repository: REPOSITORY) {
    super(repository);
  }
}
