import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Animal from './Animal'
import Tipo from './Tipo'

export default class Raca extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public nome: string

  @column()
  public tipoId: number

  @belongsTo(() => Animal)
  public animal: BelongsTo<typeof Animal>

  @hasMany(() => Tipo)
  public tipo: HasMany<typeof Tipo>
}
