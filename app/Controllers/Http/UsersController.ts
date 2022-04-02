import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import User from 'App/Models/User'

export default class UsersController {
  public async index({ response }: HttpContextContract) {
    try {
      const user = await Database.query().from('users')
      .innerJoin('rols','rols.id_rol','users.rol')
      .select('users.id', 'users.email', 'rols.nombre as rol')
      return user
    } catch {
      response.badRequest('No tienes autorizacion')
    }
  }

  public async create({}) {}

  public async store({ request, response }: HttpContextContract) {
    const user = new User()
    const email = request.input('email')
    const password = request.input('password')
    const rol = 2
    try {
      user.email = email
      user.password = password
      user.rol = rol
      await user.save()
      return response.status(200)
    } catch {
      return response.badRequest('Error al crear el usuario')
    }
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({ params, request, response }) {
    const email = request.input('email')
    const password = request.input('password')
    const rol = request.input('rol')
    try {
      const user = await User.findOrFail(params.id)
      user.email = email
      user.password = password
      user.rol = rol
      await user.save()
      return response.status(200)
    } catch {
      response.badRequest('Error al actualizar')
    }
  }

  public async destroy({ response, params }: HttpContextContract) {
    try {
      const user = await User.findOrFail(params.id)
      await user.delete()
      return response.status(200)
    } catch {
      response.badRequest('Error al borrar el usuario')
    }
  }
  /*public async destroy({ auth, params, response }: HttpContextContract) {
    try {
      await auth.use('api').authenticate()
      console.log(auth.use('api').user!)
      const user = await User.findOrFail(params.id)
      await user.delete()
      return user
    } catch {
      response.badRequest('No se borro')
    }
  }*/
}
