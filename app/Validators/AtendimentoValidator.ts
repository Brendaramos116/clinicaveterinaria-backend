import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AtendimentoValidator {
  constructor(protected ctx: HttpContextContract) {}


  public schema = schema.create({
    data: schema.date(),
    animalId: schema.number([
      rules.exists({ table: 'animals', column: 'id'})]),
    funcionarioId: schema.number([
      rules.exists({ table: 'funcionarios', column: 'id'})]),
  })

  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    exists: 'Não existe esse valor na tabela pai'
  }
}
