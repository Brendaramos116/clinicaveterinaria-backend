import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Raca from 'App/Models/Raca'

export default class extends BaseSeeder {
  public async run () {
    await Raca.createMany([
      {
        nome:'pitbull',
        tipoId: 1,
      },
      {
        nome:'pastor alemao',
        tipoId: 2,
      },
      {
        nome:'vira lata',
        tipoId: 3,
      },
      {
        nome:'siames',
        tipoId: 4,
      },
      {
        nome:'hamster sirio',
        tipoId: 5
      },
    ])
  }
}
