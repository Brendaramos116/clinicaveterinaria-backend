import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {
        nome:'Maria Selma',
        cpf:'520.654.896-59',
        endereco:'QNN 25 Conjunto B casa 15',
        telefone: '992744813',
        email:'mariaselma123@gmail.com'
      },
      {
        nome:'Vinicius Carvalho',
        cpf:'025.456.698-95',
        endereco:'QNP 09 Conjunto H casa 25',
        telefone:'995864120',
        email:'viniciuscr@hotmail.com'
      },
      {
        nome:'Samuel Pereira',
        cpf:'123.456.789-10',
        endereco:'QNM 36 Conjunto K casa 46',
        telefone: '992765236',
        email:'pereira.samuel@hotmail.com'
      },
      {
        nome:'Gabrielle Guedes',
        cpf:'321.654.987-01',
        endereco:'QNO 17 Conjunto M casa 10',
        telefone: '993659487',
        email:'gg.gabrielle111@gmail.com'
      },
      {
        nome:'Ana Clara Santos',
        cpf:'159.753.258-47',
        endereco:'QR 209 Conjunto F casa 01',
        telefone: '995864120',
        email:'clara.santosana@hotmail.com'
      }
    ])
  }
}
