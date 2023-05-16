import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Atendimento from './Atendimento'

export default class Servico extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public servico: string

  @column()
  public valor: number

  @column()
  public pagamento: string

  @manyToMany(() => Atendimento, {pivotTable: 'servicoAtendimento'})
  public servicoatendimento: ManyToMany<typeof Atendimento>
}
