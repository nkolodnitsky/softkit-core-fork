/* DO NOT EDIT, file generated by nestjs-i18n */

import { Path } from "nestjs-i18n";
export type I18nTranslations = {
    "common": {
        "validation": {
            "NOT_EMPTY": string;
            "STRING": string;
            "NUMBER": string;
            "MIN_INTEGER": string;
            "MAX_INTEGER": string;
            "REQUIRED": string;
            "URL": string;
            "BOOLEAN": string;
            "INVALID_EMAIL": string;
            "PASSWORD_DOESNT_MATCH_CONSTRAINTS": string;
            "REPEAT_PASSWORD_DOESNT_MATCH": string;
            "INVALID_BOOLEAN": string;
            "MIN": string;
            "MAX": string;
            "MAX_STRING_LENGTH": string;
            "MIN_STRING_LENGTH": string;
        };
        "exception": {
            "NOT_FOUND": {
                "TITLE": string;
                "GENERAL_DETAIL": string;
                "MISSING_CONFIGURATION_FOR_FEATURE_DETAIL": string;
                "OBJECT_NOT_FOUND_DETAIL": string;
            };
            "CONFLICT": {
                "TITLE": string;
                "OPTIMISTIC_LOCK": string;
                "ENTITY_ALREADY_EXISTS": string;
                "CAN_NOT_CREATE_ENTITY": string;
            };
            "INTERNAL_ERROR": {
                "TITLE": string;
                "GENERAL_DETAIL": string;
            };
            "FORBIDDEN": {
                "TITLE": string;
                "GENERAL_DETAIL": string;
            };
            "UNAUTHORIZED": {
                "TITLE": string;
                "GENERAL_DETAIL": string;
            };
        };
    };
    "tenant": {
        "SAML_CONFIGURATION_FINISHED": string;
    };
    "user": {
        "USER_NOT_ACTIVE": string;
        "FINISHED_REGISTRATION": string;
    };
};
export type I18nPath = Path<I18nTranslations>;
