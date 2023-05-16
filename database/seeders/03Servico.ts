import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Servico from 'App/Models/Servico'

export default class extends BaseSeeder {
  public async run () {
    await Servico.createMany([
      {
        servico:'consulta',
        valor: 80,
        pagamento:'cartao-credito',
      },
      {
        servico:'exame-sangue',
        valor: 100,
        pagamento:'dinheiro',
      },
      {
        servico:'raio-x',
        valor: 100,
        pagamento:'pix',
      },
      {
        servico:'vacinacao',
        valor: 70,
        pagamento:'cartao-debito',
      },
      {
        servico:'cirurgia - castração',
        valor: 1500,
        pagamento:'dinheiro'
      }
    ])
  }
}
