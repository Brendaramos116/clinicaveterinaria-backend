import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Funcionario from 'App/Models/Funcionario'

export default class extends BaseSeeder {
  public async run () {
    await Funcionario.createMany([
      {
        nome:'Cintia Maya',
        cpf:'417.659.742-95',
        endereco:'QNO 36 Conjunto T casa 10',
        telefone: '985413698',
        email:'maya_cintia@gmail.com',
        matricula: 'V123',
      },
      {
        nome:'Gabriel Santos',
        cpf:'147.852.369-20',
        endereco:'QNM 40 Conjunto J casa 50',
        telefone:'982456930',
        email:'ga_br_santos@hotmail.com',
        matricula: 'T254'
      },
      {
        nome:'Ana Luiza Arantes',
        cpf:'321.987.654-60',
        endereco:'QNN 26 Conjunto F casa 20',
        telefone: '995478932',
        email:'arantes.luiza111@hotmail.com',
        matricula:'B548'
      },
      {
        nome:'Emilia Lopes Pires',
        cpf:'159.456.753-01',
        endereco:'QNP 20 Conjunto D casa 10',
        telefone: '999201433',
        email:'lopespires_emilia@gmail.com',
        matricula:'R623'
      },
      {
        nome:'Jose Fernando Saboia',
        cpf:'245.369.147-45',
        endereco:'QND 15 Conjunto F casa 01',
        telefone: '992587412',
        email:'josefernando222@hotmail.com',
        matricula: 'V965'
      },
    ])
  }
}
