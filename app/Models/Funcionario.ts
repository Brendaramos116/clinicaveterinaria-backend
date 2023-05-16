import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Atendimento from './Atendimento'

export default class Funcionario extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public nome: string

  @column()
  public cpf: string

  @column()
  public endereco: string

  @column()
  public telefone: string

  @column()
  public email: string

  @column()
  public matricula: string

  @hasMany(() => Atendimento)
  public atendimento: HasMany<typeof Atendimento>
}
