import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ServicoAtendimento from 'App/Models/ServicoAtendimento'

export default class extends BaseSeeder {
  public async run () {
    await ServicoAtendimento.createMany([
      {
        servicoId: 1,
        atendimentoId: 1,
      },
      {
        servicoId: 2,
        atendimentoId: 2,
      },
      {
        servicoId: 3,
        atendimentoId: 3,
      },
      {
        servicoId:4,
        atendimentoId: 4,
      },
      {
        servicoId: 5,
        atendimentoId: 5,
      },
    ])
  }
}
