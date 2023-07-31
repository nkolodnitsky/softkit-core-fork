import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { I18nService } from 'nestjs-i18n';
import { SamlConfigurationService, TenantService } from '../../services';

import { SetupSamlConfiguration } from './vo/saml-configuration.dto';
import { SimpleResponseForCreatedEntityWithMessage } from '@saas-buildkit/common-types';

@ApiTags('Tenants')
@Controller({
  path: 'tenants/configuration',
  version: '1',
})
export class TenantsConfigurationController {
  constructor(
    private readonly i18: I18nService,
    private readonly tenantsService: TenantService,
    private readonly samlConfigurationService: SamlConfigurationService,
  ) {}

  @Post('saml')
  @HttpCode(HttpStatus.OK)
  public async setupSaml(
    @Body() request: SetupSamlConfiguration,
  ): Promise<SimpleResponseForCreatedEntityWithMessage<string>> {
    const result = await this.samlConfigurationService.createOrUpdateEntity(
      request,
    );

    return {
      data: {
        id: result.id,
      },
      message: this.i18.t('tenant.SAML_CONFIGURATION_FINISHED'),
    };
  }
}