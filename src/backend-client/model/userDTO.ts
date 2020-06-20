/**
 * Open Registration API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { InternationalizedStringDTO } from './internationalizedStringDTO';

export interface UserDTO {
  id: string;
  title: InternationalizedStringDTO;
  firstName: InternationalizedStringDTO;
  lastName: InternationalizedStringDTO;
  dateOfBirth: Date;
  email: string;
  termsOfService: Array<string>;
  organizations: Array<string>;
}