import { DateTime } from 'luxon'
import { BaseModel,  BelongsTo,  belongsTo,  column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Raca from './Raca'
import Atendimento from './Atendimento'
import Funcionario from './Funcionario'

export default class Animal extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public nome: string

  @column()
  public sexo: string

  @column()
  public dataNascimento: Date

  @column()
  public funcionarioId: number

  @column()
  public racaId: number

  @hasMany(() => Funcionario)
  public funcionario: HasMany<typeof Funcionario>

  @hasMany(() => Raca)
  public raca: HasMany<typeof Raca>

  @belongsTo(() => Atendimento)
  public atendimento: BelongsTo<typeof Atendimento>
}
