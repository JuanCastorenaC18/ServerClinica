/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(()=>{
  Route.delete('destroy/:id','UsersController.destroy')
  Route.put('update/:id','UsersController.update')
  Route.resource('aseguradora','AseguradorasController')
  Route.resource('cita','CitasController')
  Route.resource('clinica','ClinicasController')
  Route.resource('consulta','ConsultasController')
  Route.resource('especialidad','EspecialidadsController')
  Route.resource('medico','MedicosController')
  Route.resource('paciente','PacientesController')
  Route.resource('tratamiento','TratamientosController')
  Route.resource('rol','RolsController')
  Route.delete('medicosin/:id','MedicosController.borrar')
  Route.get('citasdia/:fecha','CitasController.citasdia')

  ////
  Route.post('/guardarcita/:request','MgsController.store')
  Route.post('queryvalidacion','MgsController.queryvalidacion')
  Route.post('citamg','MgsController.saveMongo')
 /* Route.put('/modificarcita/:request','MgsController.modificar')
  Route.get('/getcita/:id','MgsController.verCita')
  Route.get('/verCitamg','MgsController.verCitamg')
  Route.delete('/deletecita/:id','MgsController.delete')*/
}).prefix('api/v1').middleware('auth')



Route.group(()=>{





Route.get('getUser','UsersController.index')
Route.post('login', 'AuthController.login')
Route.get('logout', 'AuthController.logout')
Route.post('createUser','UsersController.store')

}).prefix('api/v1')
