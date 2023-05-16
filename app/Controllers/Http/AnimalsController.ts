// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Animal from "App/Models/Animal"
import AnimalValidator from "App/Validators/AnimalValidator"



export default class AnimalsController {
  index(){
    return Animal.query()
          .preload('atendimento')
          .preload('funcionario')
          .preload('raca')
}
async store({request}){
  const dados = await request.validate(AnimalValidator)

  return Animal.create(dados)
}
show({request}){
const id = request.param('id')
return Animal.findOrFail(id)
}
async destroy({request}){
const id = request.param('id')
const animal = await Animal.findOrFail(id)

return animal.delete()
}
async update({request}){
const id = request.param('id')
const animal = await Animal.findOrFail(id)

const dados = request.only(['nome','duracao','modalidade'])

animal.merge(dados)
return animal.save()
}
}
