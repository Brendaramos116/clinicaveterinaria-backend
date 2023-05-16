// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ServicoAtendimento from "App/Models/ServicoAtendimento"
import ServicoAtendimentoValidator from "App/Validators/ServicoAtendimentoValidator"

export default class ServicoAtendimentosController {
  index(){
    return ServicoAtendimento.query()
            .preload('atendimento')
            .preload('servico')
}
async store({request}){
  const dados = await request.validate(ServicoAtendimentoValidator)

  return ServicoAtendimento.create(dados)
}
show({request}){
const id = request.param('id')
return ServicoAtendimento.findOrFail(id)
}
async destroy({request}){
const id = request.param('id')
const servicoAtendimento = await ServicoAtendimento.findOrFail(id)

return servicoAtendimento.delete()
}
async update({request}){
const id = request.param('id')
const servicoAtendimento = await ServicoAtendimento.findOrFail(id)

const dados = request.only(['id'])

servicoAtendimento.merge(dados)
return servicoAtendimento.save()
}
}
