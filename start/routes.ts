
import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})
Route.group(() => {

Route.resource('/animal', 'AnimalsController').apiOnly()

Route.resource('/atendimento', 'AtendimentosController').apiOnly()

Route.resource('/cliente', 'ClientesController').apiOnly()

Route.resource('/funcionario', 'FuncionariosController').apiOnly()

Route.resource('/raca', 'RacasController').apiOnly()

Route.resource('/servicoAtendimento', 'ServicoAtendimentosController').apiOnly()

Route.resource('/servico', 'ServicosController').apiOnly()

Route.resource('/tipo', 'TiposController').apiOnly()

}).middleware('auth')

Route.post('/users', 'UsersController.store')

Route.post('/login', 'UsersController.login')

