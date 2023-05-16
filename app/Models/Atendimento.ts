import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column,  HasMany,  hasMany,  ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Animal from './Animal'
import Funcionario from './Funcionario'
import Servico from './Servico'

export default class Atendimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public data: Date

  @column()
  public animalId: number

  @column()
  public funcionarioId: number

  @hasMany(() => Animal)
  public animal: HasMany<typeof Animal>

  @belongsTo(() => Funcionario)
  public funcionario: BelongsTo<typeof Funcionario>

  @manyToMany(() => Servico, {pivotTable: 'servicoAtendimento'})
  public servicoatendimento: ManyToMany<typeof Servico>
}
