import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Atendimento from './Atendimento'
import Servico from './Servico'

export default class ServicoAtendimento extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public servicoId: number

  @column()
  public atendimentoId: number

  @manyToMany(() => Atendimento, {pivotTable: 'atendimentos'})
  public atendimento: ManyToMany<typeof Atendimento>

  @manyToMany(() => Servico, {pivotTable: 'servicos'})
  public servico: ManyToMany<typeof Servico>

}
