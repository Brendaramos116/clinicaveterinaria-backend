import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Animal from './Animal'

export default class Cliente extends BaseModel {
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

  @belongsTo(() => Animal)
  public animal: BelongsTo<typeof Animal>
}
