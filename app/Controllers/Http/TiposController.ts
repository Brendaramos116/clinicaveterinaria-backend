// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Tipo from "App/Models/Tipo"
import TipoValidator from "App/Validators/TipoValidator"

export default class TiposController {
  index(){
    return Tipo.query()
          .preload('raca')
}
async store({request}){
  const dados = await request.validate(TipoValidator)

  return Tipo.create(dados)
}
show({request}){
const id = request.param('id')
return Tipo.findOrFail(id)
}
async destroy({request}){
const id = request.param('id')
const tipo = await Tipo.findOrFail(id)

return tipo.delete()
}
async update({request}){
const id = request.param('id')
const tipo = await Tipo.findOrFail(id)

const dados = request.only(['nome'])

tipo.merge(dados)
return tipo.save()
}
}
