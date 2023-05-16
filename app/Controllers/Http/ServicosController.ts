// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Servico from "App/Models/Servico"
import ServicoValidator from "App/Validators/ServicoValidator"

export default class ServicosController {
  index(){
    return Servico.query()
            .preload('servicoatendimento')
}
 async store({request}){
  const dados = await request.validate(ServicoValidator)

  return Servico.create(dados)
}
show({request}){
const id = request.param('id')
return Servico.findOrFail(id)
}
async destroy({request}){
const id = request.param('id')
const servico = await Servico.findOrFail(id)

return servico.delete()
}
async update({request}){
const id = request.param('id')
const servico = await Servico.findOrFail(id)

const dados = request.only(['servico','valor'])

servico.merge(dados)
return servico.save()
}
}
