import { schema, rules, CustomMessages } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AnimalValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    nome: schema.string([
      rules.maxLength(50)
    ]),
    sexo: schema.string([
      rules.maxLength(20),
      rules.alpha()]),
    dataNascimento: schema.date(),
    clienteId: schema.number([
      rules.exists({ table: 'clientes', column: 'id'})
    ]),
    racaId: schema.number([
      rules.exists({ table: 'racas', column: 'id'})
    ])
  })

  public messages: CustomMessages = {
    maxLength: 'Tamanho maximo atigindo',
    exists: 'Não existe esse valor na tabela pai'
  }
}
