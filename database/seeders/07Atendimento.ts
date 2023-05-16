import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Atendimento from 'App/Models/Atendimento'

export default class extends BaseSeeder {
  public async run () {
  await Atendimento.createMany([
    {
      data: new Date('2021-5-12'),
      animalId: 1,
      funcionarioId: 1,
    },
    {
      data: new Date('2022-10-07'),
      animalId: 2,
      funcionarioId: 2,
    },
    {
      data: new Date('2022-8-31'),
      animalId: 3,
      funcionarioId: 3,
    },
    {
      data: new Date('2021-12-10'),
      animalId: 4,
      funcionarioId: 4,
    },
    {
      data: new Date('2022-6-25'),
      animalId: 5,
      funcionarioId: 5
    },
  ])
}
}
