import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Animal from 'App/Models/Animal'

export default class extends BaseSeeder {
  public async run () {
    await Animal.createMany([
      {
        nome:'Hulk',
        sexo:'macho',
        dataNascimento:new Date('2021-8-16'),
        clienteId: 2,
        racaId: 1
      },
      {
        nome:'Amora',
        sexo:'femea',
        dataNascimento:new Date('2014-8-1'),
        clienteId: 1,
        racaId: 2
      },
      {
        nome:'Menino',
        sexo:'macho',
        dataNascimento:new Date('2020-11-28'),
        clienteId: 3,
        racaId: 3
      },
      {
        nome:'Mel',
        sexo:'femea',
        dataNascimento:new Date('2019-6-10'),
        clienteId: 4,
        racaId: 4
      },
      {
        nome:'Cindy',
        sexo:'femea',
        dataNascimento:new Date('2020-2-25'),
        clienteId: 5,
        racaId: 5
      }
    ])
  }
}
